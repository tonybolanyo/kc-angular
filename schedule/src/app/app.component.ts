import { Component, OnInit } from '@angular/core';

import { ContactsService } from './contacts.service';
import { Contact } from './contacto';

// can you see? it's like .NET a class with a decorator

// @Component decorator is used here so the AppComponent
// acts as an angular component
@Component({
  // HTML selector where this component must be instantiated
  selector: 'app-root',
  // path to HTML template linked to this component
  templateUrl: './app.component.html',
  // path to style sheets that apply to this component
  // can be multiple files, can be sass
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  names: Contact[];

  // to make a dependency injection of a service
  // we must do it in the constructor of the class
  // We annotate a param with type of service to inject
  // and add an access modifier to make the injection
  constructor(private _contactsService: ContactsService) {
    console.log('Constructor: component instantiated and service injected');
  }

  // This hook ('OnInit') runs when component has
  // its template associated. It's the ideal point to link with data
  ngOnInit(): void {
    console.log('I\'m on OnInit hook');
    this.names = this._contactsService.getContacts();
  }

  deleteContact(name: Contact): void {
    this._contactsService.deleteContact(name);
    this.names = this._contactsService.getContacts();
  }
}
