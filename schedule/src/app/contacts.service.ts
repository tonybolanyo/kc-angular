import { Injectable } from '@angular/core';

// @Injectable decorator indicates that this class
// acts like a service
@Injectable()
export class ContactsService {

  private _names: string[] = [
    'Steve Jobs',
    'Steve Wozniak',
    'Bill Gates',
    'Sundar Pichai',
    'Elon Musk',
    'Bob Esponja'
  ];

  getContacts(): string[] {
    return this._names;
  }

  deleteContact(name: string): void {
    console.log('Yes, ' + name + ' deleted');
    // use filter to delete the notified contact
    // We select all contacts with name is not in the name param
    this._names = this._names.filter((n) => n != name);
  }
}
