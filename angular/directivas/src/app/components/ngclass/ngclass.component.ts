import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  texto: string = 'fondoAzul';
  activo: boolean;
  constructor() {
    this.activo = true;
  }

  ngOnInit(): void {
  }

  cambiarPrimerParrafo() {
    this.texto = 'fondoRojo';
  }

  cambiarTercerParrafo() {
    this.activo = !this.activo;
  }

}
