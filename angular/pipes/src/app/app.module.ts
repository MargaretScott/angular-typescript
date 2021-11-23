import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { VueltaPipe } from './pipes/vuelta.pipe';
import { RecortarStringsPipe } from './pipes/recortar-strings.pipe';
registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    VueltaPipe,
    RecortarStringsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
