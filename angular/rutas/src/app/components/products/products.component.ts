import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  arrProducts: Product[];
  arrProductsStock: Product[];
  arrProductsSinStock: Product[];
  constructor() {
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
    this.arrProductsSinStock = new Array();
    this.arrProductsStock = new Array();
  }

  ngOnInit(): void {
    this.arrProductsStock = this.arrProducts.filter(product => product.stock === true)
    this.arrProductsSinStock = this.arrProducts.filter(product => product.stock === false)
  }

}
