import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    this.arrTareas = new Array(
      { id: 1, title: 'Estudiar Angular', priority: 'urgente' },
      { id: 2, title: 'Sacar al perro', priority: 'diaria' },
      { id: 3, title: 'Leer un libro', priority: 'mensual' },
    )

  }

  onDeleteTarea($event: number) {
    console.log('estoy en papa', $event);

    //pues con id de la tarea quiero que me monteis la logica para borrar del array la tarea. Javascript fundamento arrays.





  }

}
