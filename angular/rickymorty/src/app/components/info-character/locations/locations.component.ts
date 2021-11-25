import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  arrLocations: any[] = new Array;
  constructor(
    private activateRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.activateRoute.parent?.params.subscribe(async params => {
      let id = parseInt(params['idcharacter']);
      const character = await this.charactersService.getById(id);
      this.arrLocations.push(character.location);
    })
  }

}
