import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {
  estado: boolean;
  constructor() {
    this.estado = true;
  }

  ngOnInit(): void {
  }


  onClickBoton() {
    this.estado = !this.estado;
  }
}
