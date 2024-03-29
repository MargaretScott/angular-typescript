import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { EspecificacionesComponent } from './components/vista-producto/especificaciones/especificaciones.component';
import { RelacionadosComponent } from './components/vista-producto/relacionados/relacionados.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';

const routes: Routes = [
  /* { path: "", component: HomeComponent },*/
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'product/:id', component: VistaProductoComponent, children:
      [
        { path: '', component: EspecificacionesComponent },
        { path: 'relacionados', component: RelacionadosComponent },
        { path: 'especificaciones', component: EspecificacionesComponent },
      ]
  },
  { path: 'services/:slug', component: ServicesComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
