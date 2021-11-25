import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  arrEpisodes: string[] = new Array();
  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    //cuando cargo el componente hago un petición para traerme toda la informacion del character y obtener asi mi array de episodios

    this.activatedRoute.parent?.params.subscribe(async params => {
      let id = parseInt(params['idcharacter']);
      const character = await this.charactersService.getById(id);
      this.arrEpisodes = character.episode;
    })

  }

}
