import { Component } from '@angular/core';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //en lugar de trabajar con any como objeto generico, vamos a definir nuestro propio objeto, para ello vamos a usar el concepto de typescript de interfaz.

  //un interfaz simplemente es un conjunto de reglas que yo marco y que tengo que seguir a pies juntillas para que no falle.

  arrProducts: Product[];

  constructor() {
    this.arrProducts = new Array();
  }

  onProductoSeleccionado($event: Product) {
    //console.log('ESTOY EN EL PADRE', $event);
    //$event es el objeto que tengo que guardar en el array.

    this.arrProducts.push($event);
  }

}
