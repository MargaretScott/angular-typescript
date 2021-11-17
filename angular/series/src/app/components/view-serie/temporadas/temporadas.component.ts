import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  arrTemporadas: any[] = [];
  constructor(
    private seriesServices: SeriesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      let id = parseInt(params['idserie']);
      this.arrTemporadas = this.seriesServices.getSeasonsById(id);
    })
  }

}
