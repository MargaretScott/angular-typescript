import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaComponent } from './components/carta/carta.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VistaPlatoComponent } from './components/vista-plato/vista-plato.component';
import { ThumbPlatoComponent } from './components/thumb-plato/thumb-plato.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    ContactoComponent,
    VistaPlatoComponent,
    ThumbPlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
