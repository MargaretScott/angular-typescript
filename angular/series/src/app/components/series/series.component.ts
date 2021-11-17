import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  arrSeries: Serie[] = new Array();
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.arrSeries = this.seriesService.getAll();
  }

  onBusqueda($event: string): void {
    this.arrSeries = this.seriesService.getByTitle($event)
  }

  onRating($event: number) {
    this.arrSeries = this.seriesService.getByRating($event)
  }

  onCanal($event: string) {
    this.arrSeries = this.seriesService.getByCanal($event);
  }

}
