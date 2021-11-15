import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  arrContenidos: any[];
  contenido: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.arrContenidos = new Array(
      {
        lang: 'es',
        title: '1_Hola, Bienvenido a este componente',
        description: 'uno'
      },
      {
        lang: 'en',
        title: '2_hello, Welcome to this component',
        description: 'one'
      },
      {
        lang: 'fr',
        title: '3_Bonjour, bienvenue sur ce composant',
        description: 'une'
      },
    )
    this.contenido = {}
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.contenido = this.arrContenidos.find(contenido => contenido.lang === params['language'])
    })

  }

}
