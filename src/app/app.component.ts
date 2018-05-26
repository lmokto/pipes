import { Component } from '@angular/core';
import { Promise } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'Fernando';
  nombre2 = 'asdasd Aasda asads';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    apellido: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      number : 2
    }
  };
  valorPromesa = Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Llego la data!'), 350 );
  });
  fecha = new Date();
  video = 'mOeSfOJrUIk';
  password = 'asdasd';
  activar = true;
}
