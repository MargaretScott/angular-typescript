import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() nuevoEmpleado: EventEmitter<Empleado>

  constructor() {
    this.nuevoEmpleado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  getDataForm(pForm: any) {
    //opcion 1 - menos pro
    //pForm.value.status = true;
    //console.log(pForm.value)
    //this.nuevoEmpleado.emit(pForm.value);

    //opcion 2 - pro requete pro
    let newEmpleado: Empleado = { status: true, ...pForm.value };
    this.nuevoEmpleado.emit(newEmpleado);
    //reset de formulario para que se vacie
    pForm.resetForm({});
  }
}
