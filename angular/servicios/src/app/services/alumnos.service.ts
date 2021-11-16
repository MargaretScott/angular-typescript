import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private arrAlumnos: Alumno[] = new Array();

  constructor() { }

  //tengo que generar metodos dentro del servicio que me permite actualizar ese array de datos privado.

  addStudent(pStudent: Alumno | undefined): void {
    if (pStudent !== undefined) {
      this.arrAlumnos.push(pStudent);
      console.log('servicio', this.arrAlumnos);
    }

  }



}
