import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relacionados',
  templateUrl: './relacionados.component.html',
  styleUrls: ['./relacionados.component.css']
})
export class RelacionadosComponent implements OnInit {

  idProducto: number;
  constructor(private activatedRoute: ActivatedRoute) {
    this.idProducto = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      this.idProducto = params['id'];
    })
  }

}
