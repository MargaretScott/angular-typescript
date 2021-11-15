import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  @Input('miEmpleado') empleado: Empleado;
  constructor() {
    this.empleado = {
      name: "",
      surname: "",
      dni: "",
      email: "",
      photo: "",
      department: "",
      status: false
    }
  }

  ngOnInit(): void {
  }

  cambiarEstado(pEmpleado: Empleado): void {
    pEmpleado.status = !pEmpleado.status;
  }

}
