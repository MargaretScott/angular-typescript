import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;
  nombre: string; //declaracion

  constructor() {
    this.name = "";
    this.surname = "";
    this.nombre = ''; //asignacion ocurre con un igual

  }

  ngOnInit(): void {
    //los input y los outputs se reciben en el ngOnInit esta funcion se carga cuando todo el componente y su html estan disponibles.
    console.log('NGONINIT', this.name);
    this.nombre = this.name;

  }

}
