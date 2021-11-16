import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/interfaces/plato.interface';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  arrPlatos: Plato[];

  constructor() {
    this.arrPlatos = new Array(
      {
        id: 1,
        title: 'Cachopo',
        price: 16,
        alergenos: ['lactosa', 'gluten'],
      },
      {
        id: 2,
        title: 'Cafe con leche',
        price: 1.5,
        alergenos: ['lactosa'],
      },
      {
        id: 3,
        title: 'Espaguetis boloñesa',
        price: 8,
        alergenos: ['lactosa', 'gluten'],
      },
      {
        id: 4,
        title: 'Ensalada mixta con queso y nueces',
        price: 6.5,
        alergenos: ['frutos secos', 'lactosa'],
      },
      {
        id: 5,
        title: 'Lubina a la espalda',
        price: 24,
        alergenos: [],
      },
    )
  }

  ngOnInit(): void {
  }

}
