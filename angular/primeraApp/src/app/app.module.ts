import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RestaComponent } from './components/resta/resta.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { DatabidingComponent } from './components/databiding/databiding.component';
import { CiclovidaComponent } from './components/ciclovida/ciclovida.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    UserProfileComponent,
    RestaComponent,
    CronometroComponent,
    DatabidingComponent,
    CiclovidaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
