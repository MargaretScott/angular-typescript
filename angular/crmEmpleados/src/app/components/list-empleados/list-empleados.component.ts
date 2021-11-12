import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  @Input('listaEmpleados') arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = new Array();
  }

  ngOnInit(): void {
  }

}
