import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { ViewSerieComponent } from './components/view-serie/view-serie.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/series' },
  { path: "series", component: SeriesComponent },
  { path: "serie/:idserie", component: ViewSerieComponent, children: [] },
  { path: "**", redirectTo: '/series' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
