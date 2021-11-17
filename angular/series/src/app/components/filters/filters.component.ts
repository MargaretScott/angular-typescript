import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  puntuacion: number = 0;
  @Output() busqueda: EventEmitter<string>
  @Output() rating: EventEmitter<number>
  constructor() {
    this.busqueda = new EventEmitter();
    this.rating = new EventEmitter();
  }

  ngOnInit(): void {
  }


  recogerDatoBusqueda($event: any) {
    console.log($event.target.value);
    this.busqueda.emit($event.target.value);
  }

  recogerDatoRating() {
    //ya tengo el dato de puntuacion quiero emitir este dato al padre que es series
    //console.log(this.puntuacion)
    this.rating.emit(this.puntuacion);
  }
}
