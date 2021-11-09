import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string;
  arrContactos: any[];
  num1: number = Math.floor(Math.random() * 100)
  num2: number = Math.floor(Math.random() * 100)
  arrNumeros: number[];
  estadoInicial = 5;
  finalizado: string = "";

  constructor() {
    this.nombre = "Fernando";
    this.arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 90, 2];

    this.arrContactos = new Array(
      { nombre: 'Juan Antonio', telefono: '66655544', email: 'jj@gmail.com' },
      { nombre: 'Pepe', telefono: '2345678', email: 'pepe@gmail.com' },
      { nombre: 'Maria', telefono: '34567890', email: 'maria@gmail.com' },
      { nombre: 'Almudena', telefono: '567489302', email: 'almu@gmail.com' },
    )
  }

  onTerminaCrono($event: string) {
    this.finalizado = $event; //$event emite la palabra final que es el nombre de la clase que necesito.
  }



}
