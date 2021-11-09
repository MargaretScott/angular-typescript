import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-total-compra',
  templateUrl: './total-compra.component.html',
  styleUrls: ['./total-compra.component.css']
})
export class TotalCompraComponent implements OnInit {

  @Input() listaproductos: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.listaproductos);
  }

  mostrarTotalCompra(): number {
    let resultado: number = 0;

    if (this.listaproductos.length !== 0) {
      let listaPrecios = this.listaproductos.map(product => product.precio * product.cantidad);
      //recorro mi array sumando todos los elementos del array lista precios, reduce es un metodo que me permite sumar todos los elementos de una lista.

      resultado = listaPrecios.reduce((sumatorio, precioSiguiente) => sumatorio + precioSiguiente)
    }

    return resultado;
  }

}
