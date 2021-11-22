import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //los pipes son un herramienta de Angular que permite transformar visualmente (es un herramiento para el html) un informacion:

  // Pasar un texto que esta en minuscula visualizarlo en mayuscula, pero ojo sin modificar el valor.
  //Visualizar fechas, monedas etc etc etc.

  nombre: string = "Juan Antonio";
  precio: number = 123456;
  porcentaje: number = 0.253;
  racional: number = 32.23456789;
  arrAlumnos: any[];
  fechaActual: Date = new Date();
  arrAnimales: string[];
  inicio: number = 0;
  frase: string = "en un lugar de la mancha";


  constructor() {
    this.arrAlumnos = new Array(
      { nombre: 'Pepe', nota: 6 },
      { nombre: 'Juan', nota: 3 },
      { nombre: 'Lucia', nota: 4 },
      { nombre: 'Joaquin', nota: 9 },
      { nombre: 'Teresa', nota: 7 },
    )
    this.arrAnimales = new Array('perro', 'gato', 'periquito', 'elefante', 'tortuga');
  }


  ngOnInit(): void {
    console.log(this.nombre);
    setInterval(() => { this.fechaActual = new Date() }, 1000)
  }

  cambiarValor($event: any) {
    this.inicio = $event.target.value;
  }

}
