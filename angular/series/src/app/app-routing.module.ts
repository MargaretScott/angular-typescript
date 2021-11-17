import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { PersonajesComponent } from './components/view-serie/personajes/personajes.component';
import { TemporadasComponent } from './components/view-serie/temporadas/temporadas.component';
import { ViewSerieComponent } from './components/view-serie/view-serie.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/series' },
  { path: "series", component: SeriesComponent },
  {
    path: "serie/:idserie", component: ViewSerieComponent, children: [
      { path: '', component: PersonajesComponent },
      { path: 'personajes', component: PersonajesComponent },
      { path: 'temporadas', component: TemporadasComponent },
    ]
  },
  { path: "**", redirectTo: '/series' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
