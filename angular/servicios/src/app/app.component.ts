import { Component } from '@angular/core';
import { Alumno } from './interfaces/alumno.interface';
import { AlumnosService } from './services/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alumno: Alumno | undefined;

  constructor(private alumnosService: AlumnosService) { }

  recogerDatos(formulario: any) {

    this.alumno = formulario.value;
    this.alumnosService.addStudent(this.alumno);
  }


}
