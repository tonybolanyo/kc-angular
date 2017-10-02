import { Component, OnInit } from '@angular/core';

import { Contact } from '../contacto';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'app-ruta-a',
  templateUrl: './ruta-a.component.html',
  styleUrls: ['./ruta-a.component.css']
})
export class RutaAComponent implements OnInit {

  names: Contact[];
   
  // to make a dependency injection of a service
  // we must do it in the constructor of the class
  // We annotate a param with type of service to inject
  // and add an access modifier to make the injection
  constructor(private _contactsService: ContactsService) { }


  // This hook ('OnInit') runs when component has
  // its template associated. It's the ideal point to link with data
  ngOnInit(): void {
    this.names = this._contactsService.getContacts();
  }

  deleteContact(name: Contact): void {
    this._contactsService.deleteContact(name);
    this.names = this._contactsService.getContacts();
  }
  

}
