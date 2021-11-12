import { Component } from '@angular/core';
import { Empleado } from './interfaces/empleado.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: Empleado[];
  alert: boolean;

  constructor() {
    this.arrEmpleados = new Array();
    this.alert = false;
  }

  onNuevoEmpleado($event: Empleado) {

    let isDuplicate = this.arrEmpleados.some(empleado => empleado.dni === $event.dni);

    if (!isDuplicate) {
      this.arrEmpleados.push($event);
    } else {
      //alert de bootstrap
      this.alert = true;
    }
  }

  quitarAlert() {
    this.alert = false;
  }



}
