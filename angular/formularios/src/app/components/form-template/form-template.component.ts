import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recogerDatos(pForm: any) {
    console.log(pForm.value);
    //guardar el elemento, enviarlo etc etc etc
    //para vaciar el formulario
    pForm.resetForm({});
  }

}
