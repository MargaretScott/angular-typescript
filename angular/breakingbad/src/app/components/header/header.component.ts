import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  arrCategorias: string[];
  constructor(
    private router: Router,
    private charactersService: CharactersService
  ) {
    this.arrCategorias = new Array();
  }

  async ngOnInit(): Promise<void> {
    this.arrCategorias = await this.charactersService.getAllCategories();
    //console.log(this.arrCategorias);
  }

  getDataForm(pForm: any) {
    //redireccion a search/:name  con el valor del formulario
    let word = pForm.value.search;
    this.router.navigate(['/search', word])
    pForm.resetForm();
  }

  onSelectCategory($event: any): void {
    let category = $event.target.value;
    if (category !== "") {
      this.router.navigateByUrl('/home?category=' + category);
    } else {
      this.router.navigateByUrl('/home?category=none');
    }

  }

}
