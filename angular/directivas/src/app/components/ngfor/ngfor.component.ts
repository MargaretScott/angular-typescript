import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  episodios: any[];
  listaEpisodios: any[];

  constructor() {

    this.episodios = new Array(
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' }
    )

    this.listaEpisodios = this.episodios;

  }

  ngOnInit(): void {
  }

  changeDirector($event: any) {
    let director = $event.target.value;

    if (director !== "") {
      this.listaEpisodios = this.episodios.filter(episodio => episodio.director === director);
    } else {
      this.listaEpisodios = this.episodios;
    }


  }

}
