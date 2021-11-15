import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  arrContactos: any[];
  constructor(private router: Router) {
    this.arrContactos = [];
  }

  ngOnInit(): void {
  }


  recogerDatos(pForm: any) {

    if (pForm.value.phone !== "") {
      //despues de recoger los datos del formulario y hacer lo que sea con ellos.
      this.arrContactos.push(pForm.value);
      console.log(this.arrContactos);
      //cuando se haya producido el push dentro del mi array quiero redirigir a otra seccion, por ejemplo la home.
      this.router.navigate(['/home']);
    } else {
      alert('necesito que me des tu telefono para poder contactar contigo');
    }




  }
}
