import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plato } from 'src/app/interfaces/plato.interface';

@Component({
  selector: 'app-vista-plato',
  templateUrl: './vista-plato.component.html',
  styleUrls: ['./vista-plato.component.css']
})
export class VistaPlatoComponent implements OnInit {

  arrPlatos: Plato[];
  plato: Plato | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
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
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      if (!isNaN(id)) {


        this.plato = this.arrPlatos.find(plato => plato.id === id);

        if (this.plato === undefined) {
          alert('El plato no existe')
          this.router.navigate(['/carta']);
        }


      } else {
        alert('La ruta no es correcta')
        this.router.navigate(['/carta'])
      }

    })
  }

}
