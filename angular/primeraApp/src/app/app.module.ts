import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RestaComponent } from './components/resta/resta.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    UserProfileComponent,
    RestaComponent,
    CronometroComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
