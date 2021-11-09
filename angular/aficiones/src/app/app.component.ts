import { Component } from '@angular/core';
import { Aficion } from './interfaces/aficion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrAficiones: Aficion[];

  constructor() {
    this.arrAficiones = new Array();
  }

  onInsertarAficion($event: Aficion) {

    if (this.arrAficiones.length == 0) {
      this.arrAficiones.push($event);
    } else {
      let existeDuplicado = this.arrAficiones.some(aficion => aficion.name === $event.name && aficion.hobbie === $event.hobbie);
      if (!existeDuplicado) {
        this.arrAficiones.push($event);
      } else {
        alert('Elemento duplicado');
      }
    }


  }
}
