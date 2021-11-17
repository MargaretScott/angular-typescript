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

  getAll(): Serie[] {
    return this.arrSeries;
  }

  getById(pId: number): Serie | undefined {
    return this.arrSeries.find(serie => serie.id === pId)
  }

  getByTitle(pTitle: string): Serie[] {
    return this.arrSeries.filter(serie => serie.titulo.toLowerCase().includes(pTitle.toLowerCase()))
  }

  getByRating(pRating: number): Serie[] {
    return this.arrSeries.filter(serie => serie.rating >= pRating);
  }



}
