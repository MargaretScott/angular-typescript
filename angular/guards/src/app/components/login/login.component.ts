import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err: boolean = false;
  message: string = "";
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async getDataForm(pForm: any) {
    //console.log(pForm.value)
    //una vez que tenemos los datos nos tenemos que logar para ello hay que hacer una petición al servicio por post y enviarle le email y password para que me devuelva el token que valida mi acceso.
    // un token no es mas que una clave alfanumerica  que valida el acceso de una persona a una aplicación , el token se crea con la info del usuario normalmente el id usuario, el user la fecha de hoy y la fecha de expiración del token
    try {
      const response = await this.usuariosService.login(pForm.value)
      console.log(response);
      this.err = false;
      //cuando yo me logueo recibo un token , si tengo token puede acceder a las paginas consideradas de acceso de restringido
      //redirigir a agenda

      //antes de redirigir voy a guardar el token en el localStorage para poderlo usar desde cualquier estado de mi aplicición u componente.

      //localStorage.setItem('clave' , JSON.stringify(Object))
      localStorage.setItem('token', response.token)

      this.router.navigate(['/agenda']);

    } catch (msg: any) {
      if (msg.error.error) {
        this.err = true;
        this.message = msg.error.error;
      }
    }



  }

}
