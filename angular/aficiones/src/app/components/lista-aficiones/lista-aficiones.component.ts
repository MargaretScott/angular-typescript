import { Component, Input, OnInit } from '@angular/core';
import { Aficion } from 'src/app/interfaces/aficion.interface';

@Component({
  selector: 'app-lista-aficiones',
  templateUrl: './lista-aficiones.component.html',
  styleUrls: ['./lista-aficiones.component.css']
})
export class ListaAficionesComponent implements OnInit {

  @Input('listahobbies') arrAficiones: Aficion[] = new Array(); constructor() { }

  ngOnInit(): void {

  }

  mostrarAficiones() {
    let listado: string = "";

    this.arrAficiones.forEach(aficion => listado += `<li>${aficion.name}: ${aficion.hobbie}</li>`)


    return listado;
  }

}
