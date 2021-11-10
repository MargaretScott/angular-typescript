import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuario.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vistaForm: string;
  vistaUsers: string;
  colorForm: string;
  colorUsers: string;
  arrUsuarios: Usuario[];
  newUser: Usuario;

  constructor() {
    this.vistaForm = 'block';
    this.vistaUsers = 'none';
    this.colorForm = 'darkred';
    this.colorUsers = 'tomato';
    this.arrUsuarios = new Array();
    this.newUser = { name: "", email: "" };
  }


  cargarSeccion(seccion: string) {

    if (seccion === 'formulario') {
      this.colorForm = 'darkred';
      this.colorUsers = 'tomato';
      this.vistaForm = 'block';
      this.vistaUsers = 'none';
    } else {
      this.colorUsers = 'darkred';
      this.colorForm = 'tomato';
      this.vistaForm = 'none';
      this.vistaUsers = 'block';
    }
  }

  guardarUsuario() {
    //console.log(this.newUser);
    if (this.newUser.name !== "" && this.newUser.email !== "") {
      //comprobar antes de guardar que el dato no esta duplicado
      let isUserDuplicate = this.arrUsuarios.some(usuario => usuario.name === this.newUser.name && usuario.email === this.newUser.email);

      if (!isUserDuplicate) {
        this.arrUsuarios.push(this.newUser);
        this.newUser = { name: "", email: "" };
        this.cargarSeccion('usuarios');
      } else {
        alert('Usuario duplicado')
      }


    } else {
      alert('los campos no pueden estar vacios')
    }


  }

  mostrarUsuarios() {
    let result = "";
    this.arrUsuarios.forEach(usuario => result += `<li>${usuario.name}: ${usuario.email}</li>`)
    return result;
  }


}
