import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interfaces';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  arrProducts: Product[];
  producto: Product | undefined;
  constructor(private activedRoute: ActivatedRoute) {

    this.arrProducts = new Array(
      {
        id: 1,
        title: 'Camiseta Manga Corta',
        price: 12,
        stock: true
      },
      {
        id: 2,
        title: 'Pantalon largo vaquero',
        price: 34,
        stock: false
      },
    )

  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.producto = this.arrProducts.find(producto => producto.id === id);
    })
  }

}
