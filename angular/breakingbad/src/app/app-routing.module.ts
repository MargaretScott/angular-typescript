import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: CharacterListComponent },
  { path: 'home/:page', component: CharacterListComponent },
  { path: 'character/:idcharacter', component: CharacterDetailComponent },
  { path: 'search/:name', component: CharacterListComponent },
  { path: '**', redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
  http://localhost:4200/home
  http://localhost:4200/character/1/precio (dinamica) -> se recoge con params

  http://localhost:4200/home?category="loquesea"&precio="54" (dinamica no definida el app-routing) -> se recoge con queryParams.

  QueryParams son parametros de ruta que se usan para discriminar en un vista los elementos.

  Los dos se capturan con ActivatedRoute uno con params y otro queryParams


*/
