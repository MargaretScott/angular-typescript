import { Injectable } from '@angular/core';
import { Workout } from '../interfaces/workout.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  private arrWorkOut: Workout[];
  private id: number;
  constructor() {
    this.arrWorkOut = new Array();
    this.id = this.arrWorkOut.length + 1;
  }

  saveWorkOut(pInfoForm: any): boolean {
    //opcion 1 - las pro
    let workout: Workout = { id: this.id, ...pInfoForm };

    //opcion2 - la noob
    //pInfoForm.id = this.id;
    this.arrWorkOut.push(workout)
    this.id++;
    return true
    //console.log('service', this.arrWorkOut);
  }

  getAll() {
    ///aqui haremos la peticion a la API para obtener los datos de la BBDD.
    return this.arrWorkOut;
  }
}
