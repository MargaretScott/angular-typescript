import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  // tengo que discriminar que servicio me viene por la ruta para cargar la informacion del dicho servicio.

  //Para simular una peticion a la BBDD vamos a pintar aqui el mismo array que hemos creado en la home.

  //cuando entre en el componente servicios quiero cargar la informacion del servicio que estoy pidiendo en la url. tengo que capturar el segundo parametro del ruta que me dice el servicio que estoy cargando /services/seo-sem -> seo-sem es el dato que necesito

  misServicios: any[];
  servicio: any;


  //activatedRoute es un injectable que me permite captura la parte variable de mi ruta.

  constructor(private activatedRoute: ActivatedRoute) {

    this.misServicios = new Array(
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
      })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const url = params['slug'];
      this.servicio = this.misServicios.find(servicio => servicio.url === url)
    })
  }

}



