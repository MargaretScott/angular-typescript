import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { ViewSerieComponent } from './components/view-serie/view-serie.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ThumbSerieComponent } from './components/thumb-serie/thumb-serie.component';
import { PersonajesComponent } from './components/view-serie/personajes/personajes.component';
import { TemporadasComponent } from './components/view-serie/temporadas/temporadas.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    ViewSerieComponent,
    FiltersComponent,
    ThumbSerieComponent,
    PersonajesComponent,
    TemporadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
