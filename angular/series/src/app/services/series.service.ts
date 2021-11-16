import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie.interface';
import { SERIES } from '../db/series.db';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private arrSeries: Serie[];

  constructor() {
    this.arrSeries = SERIES;
  }
}
