import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './components/carta/carta.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VistaPlatoComponent } from './components/vista-plato/vista-plato.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/carta" },
  { path: "carta", component: CartaComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "carta/:id", component: VistaPlatoComponent },
  { path: "**", redirectTo: "/carta" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
