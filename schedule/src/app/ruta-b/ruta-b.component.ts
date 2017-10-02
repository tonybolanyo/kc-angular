import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Contact } from '../contacto';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-ruta-b',
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent {

  constructor(
    private _contactsService: ContactsService,
    private _router: Router) { }

  saveContact(contact: Contact): void {
    this._contactsService.addContact(contact);
    this._router.navigate(['/contact-list']);
  }

}
