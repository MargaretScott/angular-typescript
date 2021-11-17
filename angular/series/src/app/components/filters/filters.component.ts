import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  puntuacion: number = 0;
  @Output() busqueda: EventEmitter<string>
  @Output() rating: EventEmitter<number>
  @Output() canal: EventEmitter<string>
  arrCanales: string[] = new Array();

  constructor(private seriesService: SeriesService) {
    this.busqueda = new EventEmitter();
    this.rating = new EventEmitter();
    this.canal = new EventEmitter();
  }

  ngOnInit(): void {
    this.arrCanales = this.seriesService.getAllChannel();
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

  recogerDatosCanal($event: any) {
    this.canal.emit($event.target.value);
  }


}
