import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private arrPersonaje: Personaje[]
  constructor() {
    this.arrPersonaje = PERSONAJES;
  }

  getPersonajesByIdSerie(pIdSerie: number): Personaje[] {
    return this.arrPersonaje.filter(personaje => personaje.serie === pIdSerie)
  }
}
