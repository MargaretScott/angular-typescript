import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-view-serie',
  templateUrl: './view-serie.component.html',
  styleUrls: ['./view-serie.component.css']
})
export class ViewSerieComponent implements OnInit {

  miSerie: Serie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    //cuando cargo el componente quiero saber que serie tengo que pintar y esto lo se por el id de la ruta, luego tengo que captura ese id, que lo he pasado yo por routerlink
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idserie']);
      //console.log(typeof id);
      this.miSerie = this.seriesService.getById(id);
    })
  }

}
