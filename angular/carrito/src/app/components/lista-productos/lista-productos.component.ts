import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() listaproductos: Product[]

  constructor() {
    this.listaproductos = [];
  }

  ngOnInit(): void {
    //en el ng esta disponible el arrde productos que me ha pasado el padre
  }

  mostrarProductos(): string {
    let resultado = "";
    this.listaproductos.forEach(product => {

      let precioTotalProducto: number = (product.cantidad * product.precio);
      let color: string = (precioTotalProducto >= 5) ? 'green' : 'red';
      resultado += `<li class="${color}">${product.titulo} (cantidad: ${product.cantidad} - precio: ${precioTotalProducto.toFixed(2)})</li>`
    })
    return resultado;
  }

}
