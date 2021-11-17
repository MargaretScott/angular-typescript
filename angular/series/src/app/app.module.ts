import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { ViewSerieComponent } from './components/view-serie/view-serie.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ThumbSerieComponent } from './components/thumb-serie/thumb-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    ViewSerieComponent,
    FiltersComponent,
    ThumbSerieComponent
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
