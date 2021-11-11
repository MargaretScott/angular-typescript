import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() nuevaTarea: EventEmitter<Tarea>;
  newTarea: Tarea;
  id: number = 4;

  constructor() {
    this.nuevaTarea = new EventEmitter();
    this.newTarea = {
      id: 0,
      title: "",
      priority: ""
    }
  }

  ngOnInit(): void {
  }

  guardarTarea() {
    if (this.newTarea.title !== "" && this.newTarea.priority !== "") {
      this.newTarea.id = this.id
      this.nuevaTarea.emit(this.newTarea);
      this.newTarea = { id: 0, title: "", priority: "" }
      this.id++;
    } else {
      alert('Los campos no pueden ser vacios')
    }

  }

}
