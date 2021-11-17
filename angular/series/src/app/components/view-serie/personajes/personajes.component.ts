import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  arrPersonajes: Personaje[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesServices: PersonajesService
  ) {
    this.arrPersonajes = new Array();
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      let id = parseInt(params['idserie']);
      this.arrPersonajes = this.personajesServices.getPersonajesByIdSerie(id);

    })
  }

}
