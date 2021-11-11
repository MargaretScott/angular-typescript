import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrls: ['./databiding.component.css']
})
export class DatabidingComponent implements OnInit {

  //ONE BIDING
  @Input() nombre: string;
  apellido = 'Perez';

  //TWO WAY DATA BIDING comunica el ts con el html y tambien comunica el html con el ts



  constructor() {
    this.nombre = "Juan";

  }

  ngOnInit(): void {
  }

}
