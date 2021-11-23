import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  token: string | null = "";
  contact: Contacto | undefined;
  constructor(
    private contactosService: ContactosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(async params => {
      let id = parseInt(params['id'])
      this.contact = await this.contactosService.getById(id);
    })

    //voy a sacar informacion del localStorage para practica
    this.token = localStorage.getItem('token')

  }

}
