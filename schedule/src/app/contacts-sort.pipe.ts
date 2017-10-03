import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from './contacto';

@Pipe({
  name: 'contactsSort'
})
export class ContactsSortPipe implements PipeTransform {

  private _getFullName(contact: Contact): string {
    return `${contact.name}${contact.lastName}`.toLowerCase();
  }

  transform(value: Contact[], order: string): Contact[] {

    if (!value) {
      return []; //value;
    }

    let sorted: Contact[];

    if (order === 'asc') {
      // ascendent order by name and last name
      sorted = value.sort((contactA: Contact, contactB: Contact): number => {
        const fullNameA: string = this._getFullName(contactA);
        const fullNameB: string = this._getFullName(contactB);
        // -1 if A < B
        //  0 if A == B
        //  1 if A > B
        return fullNameA > fullNameB ? 1 : fullNameA < fullNameB ? -1 : 0;
      });
    } else {
      // descendent order by name and last name
      sorted = value.sort((contactA: Contact, contactB: Contact): number => {
        const fullNameA: string = this._getFullName(contactA);
        const fullNameB: string = this._getFullName(contactB);
        // desc, inverted values
        //  1 if A < B
        //  0 if A == B
        // -1 if A > B
        return fullNameA < fullNameB ? 1 : fullNameA > fullNameB ? -1 : 0;
      });
    }
      
    return sorted;
  }

}
