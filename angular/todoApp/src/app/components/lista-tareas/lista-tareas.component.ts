import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';


@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  @Input('listaTareas') arrTareas: Tarea[];
  @Output() borrarTarea: EventEmitter<number>

  constructor() {
    this.arrTareas = [];
    this.borrarTarea = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.arrTareas)
  }

  delete(id: number): void {
    this.borrarTarea.emit(id);
  }

}
