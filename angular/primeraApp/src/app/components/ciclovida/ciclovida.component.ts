import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclovida',
  templateUrl: './ciclovida.component.html',
  styleUrls: ['./ciclovida.component.css']
})
export class CiclovidaComponent implements OnInit {

  @Input() nombre: string;
  constructor() {
    this.nombre = 'Juan';
    console.log('constructor', this.nombre)
  }

  // ngOnChanges() {
  //   console.log('ngonchange', this.nombre)
  // }


  ngOnInit(): void {
    console.log('ngoninit', this.nombre)
  }

  ngDoCheck(): void {
    console.log('ngdocheck', this.nombre)
  }


}
