import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Departamento } from 'src/app/interfaces/departamento.interface';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() nuevoEmpleado: EventEmitter<Empleado>
  arrDepartments: Departamento[];
  constructor() {
    this.nuevoEmpleado = new EventEmitter();

    this.arrDepartments = new Array(
      {
        title: 'contabilidad',
        numEmpleados: 50
      },
      {
        title: 'marketing',
        numEmpleados: 30
      },
      {
        title: 'dirección',
        numEmpleados: 10
      },
      {
        title: 'desarrollo',
        numEmpleados: 150
      }
    )
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
