import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      age: new FormControl('', []),
      mail: new FormControl('', [
        Validators.required,
      ]),
      dni: new FormControl('', []),
      password: new FormControl('', []),
      repitepassword: new FormControl('', []),
    }, []);
  }

  ngOnInit(): void {
  }

  recogerDatos() {
    console.log(this.formulario.value);
  }

}
