import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/login" },
  { path: "login", component: LoginComponent },
  { path: "agenda", component: ContactListComponent, canActivate: [LoginGuard] }, //esta ruta tendrá un tercer parametro que será el guard
  { path: "contacto/:id", component: ContactViewComponent, canActivate: [LoginGuard] }, //esta ruta tendrá un tercer parametro que será el guard
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
