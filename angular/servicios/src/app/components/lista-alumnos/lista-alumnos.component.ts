import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  arrAlumnos: Alumno[];
  constructor(private alumnoService: AlumnosService) {
    this.arrAlumnos = new Array();
  }

  ngOnInit(): void {
    //es cuando tengo que pedir al servicio que me de los datos
    this.arrAlumnos = this.alumnoService.getAll();
    console.log(this.arrAlumnos);
  }

  recogerFiltros(filtros: any) {
    if (filtros.value.edadmin < filtros.value.edadmax) {
      //filtro, hago la peticion
      this.arrAlumnos = this.alumnoService.getByAge(filtros.value);
    } else {
      alert('El campo minimo no puede ser mayor que el maximo');
    }

  }

  mostrarTodos() {
    this.arrAlumnos = this.alumnoService.getAll();
  }

}
