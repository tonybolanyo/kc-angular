import { Injectable } from '@angular/core';

import { Contact } from './contacto';

// @Injectable decorator indicates that this class
// acts like a service
@Injectable()
export class ContactsService {

  private _names: Contact[] = [
    new Contact(1, 'Steve', 'Jobs', '555 666 777', 'steve.jobs@apple.com'),
    new Contact(2, 'Steve', 'Wozniak', '765 890 345', 'steve.wozniak@apple.com'),
    new Contact(3, 'Bill', 'Gates'),
    new Contact(4, 'Sundar', 'Pichai', null, 'sungar.pichai@google.com'),
    new Contact(5, 'Elon', 'Musk', '345 213 456'),
    new Contact(6, 'Bob', 'Esponja', '123 123 123', 'bob.esponja@dibus.es')
  ];

  getContacts(): Contact[] {
    return this._names;
  }

  addContact(contact: Contact): void {
    this._names.push(contact);
    console.log(contact, this._names);
  }

  deleteContact(name: Contact): void {
    console.log('Yes, ' + name + ' deleted');
    // use filter to delete the notified contact
    // We select all contacts with name is not in the name param
    this._names = this._names.filter((n) => n.id !== name.id);
  }
}
