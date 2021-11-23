import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interface';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input('myContact') contact: Contacto | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
