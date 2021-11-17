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

  getByCanal(pCanal: string): Serie[] {
    if (pCanal !== "") {
      return this.arrSeries.filter(serie => serie.canal === pCanal);
    } else {
      return this.arrSeries;
    }

  }


  getAllChannel(): string[] {

    let canales = this.arrSeries.map(serie => serie.canal);
    //[...new Set[array]] elimina los elementos duplicados de un array
    canales = [...new Set(canales)]
    return canales;

  }

  getSeasonsById(pId: number): any[] {

    let temporadas = new Array();

    this.arrSeries.forEach(serie => {
      if (serie.id === pId) {
        //esta es mi serie
        temporadas = serie.temporadas
      }
    })

    return temporadas
  }




}
