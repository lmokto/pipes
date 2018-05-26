import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): string {
    if ( activar ) {
      return '**********';
    } else {
      return value;
    }
  }

}
