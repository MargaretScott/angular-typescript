import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  servicios: any[];
  constructor() {
    this.servicios = new Array(
      {
        nombre: 'Desarrollo web',
        descripcion: 'Hago web chulas y de mucha pasta',
        url: 'desarrollo-web'
      },
      {
        nombre: 'Branding',
        descripcion: 'Tu marca no tiene secretos para mi',
        url: 'branding'
      },
      {
        nombre: 'SEO',
        descripcion: 'Posicionar tu web es mi prioridad',
        url: 'seo-sem'
      },
      {
        nombre: "UX-UI",
        descripcion: 'El usuario se sentirá muy comodo con tus interfaces',
        url: 'ux-ui'
      }
    )
  }

  ngOnInit(): void {
  }

}
