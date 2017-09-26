import { Injectable } from '@angular/core';

import { Contact } from './contacto';

// @Injectable decorator indicates that this class
// acts like a service
@Injectable()
export class ContactsService {

  private _names: Contact[] = [
    new Contact(1, 'Steve', 'Jobs'),
    new Contact(2, 'Steve', 'Wozniak'),
    new Contact(3, 'Bill', 'Gates'),
    new Contact(4, 'Sundar', 'Pichai'),
    new Contact(5, 'Elon', 'Musk'),
    new Contact(6, 'Bob', 'Esponja')
  ];

  getContacts(): Contact[] {
    return this._names;
  }

  deleteContact(name: Contact): void {
    console.log('Yes, ' + name + ' deleted');
    // use filter to delete the notified contact
    // We select all contacts with name is not in the name param
    this._names = this._names.filter((n) => n.id !== name.id);
  }
}
