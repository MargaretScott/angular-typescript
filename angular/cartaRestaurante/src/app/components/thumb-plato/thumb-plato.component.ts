import { Component, Input, OnInit } from '@angular/core';
import { Plato } from 'src/app/interfaces/plato.interface';

@Component({
  selector: 'app-thumb-plato',
  templateUrl: './thumb-plato.component.html',
  styleUrls: ['./thumb-plato.component.css']
})
export class ThumbPlatoComponent implements OnInit {

  @Input('miPlato') plato: Plato | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
