import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//necesario para usar los formularios de tipo template
import { FormsModule } from '@angular/forms';

//necesario para usar los formularios de tipo model
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormModelComponent } from './components/form-model/form-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
