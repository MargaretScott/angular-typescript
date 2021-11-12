import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(7)
      ]),
      age: new FormControl('', [
        this.edadValidador
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidador
      ]),
      password: new FormControl('', [
        Validators.minLength(8)
      ]),
      repitepassword: new FormControl('', []),
    }, [this.passwordValidador]);
  }

  ngOnInit(): void {
  }

  passwordValidador(form: AbstractControl) {

    const passwordValue = form.get('password')?.value;
    const repitepasswordValue = form.get('repitepassword')?.value;

    if (passwordValue === repitepasswordValue) {
      return null;
    } else {
      return { passwordvalidador: true }
    }


  }



  dniValidador(control: AbstractControl) {
    const dni = control.value;
    const conjuntoLetras = "TRWAGMYFPDXBNJZSQVHLCKET"
    const expDni = /^\d{8}[A-Z]/;

    if (expDni.test(dni)) {

      const numero = dni.substr(0, dni.length - 1); //50742456
      const letra = dni.substr(dni.length - 1, 1); //V
      const calculo = numero % 23;

      return (letra !== conjuntoLetras.split("")[calculo]) ? { dnivalidador: 'La letra no corresponde con el dni' } : null;

    } else {
      return { dnivalidador: 'formato es incorrecto' }
    }

  }


  edadValidador(control: AbstractControl) {
    //control es el campo y value es el valor que el usuario mete campo.
    const value = parseInt(control.value);
    const min = 18;
    const max = 65;
    if (value >= min && value <= max) {
      return null;
    } else {
      return { edadvalidador: true }
    }

  }


  recogerDatos() {
    console.log(this.formulario.value);
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }

  }

}
