import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

    transform(value: string, todas: boolean): string {
        value = value.toLocaleLowerCase();
        const nombres: string[] = value.split(' ');

        if ( todas ) {
            for ( const i in nombres ) {
                if ( nombres[i] ) {
                    nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
                }
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(' ');
    }
}
