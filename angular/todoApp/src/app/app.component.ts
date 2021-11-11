import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];
  arrOriginal: Tarea[];
  constructor() {
    this.arrOriginal = new Array(
      { id: 1, title: 'Estudiar Angular', priority: 'urgente' },
      { id: 2, title: 'Sacar al perro', priority: 'diaria' },
      { id: 3, title: 'Leer un libro', priority: 'mensual' },
    )
    this.arrTareas = [...this.arrOriginal];

  }

  onDeleteTarea($event: number) {

    //console.log('estoy en papa', typeof $event);

    //pues con id de la tarea quiero que me monteis la logica para borrar del array la tarea. Javascript fundamento arrays.

    //opcion 1 - borro del array recogiendo la posicion del tarea que tiene dicho id y posteriormente borrar dicha posicion del array.

    /* let position: number = this.arrTareas.findIndex(tarea => tarea.id === $event);
    this.arrTareas.splice(position, 1);
    this.arrOriginal = [...this.arrTareas];
    */

    //opcion 2 - para borrar de un array lo que hago es quedarme dentro del array con los elementos que no sean el que he seleccionado.

    this.arrTareas = this.arrTareas.filter(tarea => tarea.id !== $event);
    this.arrOriginal = [...this.arrTareas];
  }


  onInsertTarea($event: Tarea): void {
    //aqui tendre que comprar si la tarea esta duplicada etc...
    let isExisteTarea: boolean = this.arrTareas.some(tarea => tarea.title.toLowerCase() === $event.title.toLowerCase() && tarea.priority === $event.priority);
    if (!isExisteTarea) {
      this.arrTareas.push($event);
      this.arrOriginal = [...this.arrTareas];
    } else {
      alert('Tarea duplicada');
    }
  }

  onFiltroPrioridad($event: string) {
    if ($event !== "") {
      this.arrTareas = this.arrOriginal.filter(tarea => tarea.priority === $event);
    } else {
      this.arrTareas = [...this.arrOriginal];
    }

  }

  onSearch($event: string) {
    if ($event !== "") {
      //filtro por la palabra

      this.arrTareas = this.arrOriginal.filter(tarea => tarea.title.toLowerCase().includes($event.toLowerCase()))

    } else {
      //pinto todas las tareas
      this.arrTareas = [...this.arrOriginal];
    }
  }

}
