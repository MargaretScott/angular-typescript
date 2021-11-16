import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.css']
})
export class EspecificacionesComponent implements OnInit {

  idProducto: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.idProducto = 0;
  }

  ngOnInit(): void {

    //el parent me devuelve la parte dinamica de la ruta del padre.
    this.activatedRoute.parent?.params.subscribe(params => {
      this.idProducto = params['id'];
    })
  }

}
