import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EmpleadoComponent,
    ListEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
