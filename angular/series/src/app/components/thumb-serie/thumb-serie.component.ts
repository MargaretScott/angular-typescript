import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'app-thumb-serie',
  templateUrl: './thumb-serie.component.html',
  styleUrls: ['./thumb-serie.component.css']
})
export class ThumbSerieComponent implements OnInit {

  @Input('miserie') serie: Serie | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
