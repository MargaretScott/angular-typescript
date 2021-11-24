import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  constructor(
    private usersService: UsersService,
    private router: Router
  ) {

    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repitepassword: new FormControl('', []),

    }, [this.passwordValidator])
  }

  passwordValidator(form: AbstractControl): any {
    const pass = form.get('password')?.value;
    const repitePass = form.get('repitepassword')?.value;
    if (pass === repitePass) {
      return null
    } else {
      return { passwordValidator: true }
    }
  }

  ngOnInit(): void {
  }

  async getDataForm() {

    let response = await this.usersService.register(this.registerForm.value);
    if (response.success) {
      this.router.navigate(['/login']);
    } else {
      alert('Error al generar el registro, intentelo de nuevo');
    }

  }

  checkControl(pControlName: string, pError: string): boolean {

    if (this.registerForm.get(pControlName)?.hasError(pError) && this.registerForm.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }

  }

}
