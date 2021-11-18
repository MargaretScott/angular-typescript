import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/interfaces/workout.interface';
import { WorkoutsService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  arrWorkOuts: Workout[]
  caloriasTotal: number = 0;
  tiempoTotal: number = 0;
  repTotal: number = 0;
  constructor(private workoutsService: WorkoutsService) {
    this.arrWorkOuts = new Array();
  }

  ngOnInit(): void {
    this.arrWorkOuts = this.workoutsService.getAll();
    //opcion 1 - foreach
    this.arrWorkOuts.forEach(workout => {
      this.caloriasTotal += workout.time * 15;
      this.tiempoTotal += workout.time;
      //this.repTotal += workout.rep;
    })

    //opcion 2 - map - reduce
    /*
    let listaRep = this.arrWorkOuts.map(workout => workout.rep);
    this.repTotal = listaRep.reduce((prev, next) => prev + next);
    */

    //opcion 3 - only reduce VAMOS!!!!!!!!!

    this.repTotal = this.arrWorkOuts.reduce<number>((acumulador, value) => {
      return acumulador + value.rep
    }, 0)

  }

}
