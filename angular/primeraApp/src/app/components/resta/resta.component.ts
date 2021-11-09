import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {

  @Input() numero1: number;
  @Input() numero2: number = 0;
  resultado: number;

  constructor() {
    this.numero1 = 0;
    this.resultado = 0;
  }

  ngOnInit(): void {
    this.resultado = this.numero1 - this.numero2;
  }

}
