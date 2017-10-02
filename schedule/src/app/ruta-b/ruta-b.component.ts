import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { Contact } from '../contacto';
import { ContactsService } from '../contacts.service';

@Component({
  templateUrl: './ruta-b.component.html',
  styleUrls: ['./ruta-b.component.css']
})
export class RutaBComponent {

  constructor(
    private _contactsService: ContactsService,
    private _router: Router) { }

  saveContact(contact: Contact): void {
    this._contactsService
      .addContact(contact)
      .subscribe(() => {
        // en realidad recibimos un contacto,
        // pero como no vamos a hacer nada con el
        // simplemente lo ignoramos
        this._router.navigate(['/contact-list']);
      });
  }

}
