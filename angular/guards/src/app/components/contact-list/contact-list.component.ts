import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


  arrContacts: Contacto[];
  constructor(
    private contactosService: ContactosService
  ) {

    this.arrContacts = new Array();
  }

  async ngOnInit(): Promise<void> {
    this.arrContacts = await this.contactosService.getAll();
    //console.log(this.arrContacts);
  }

}
