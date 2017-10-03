import { Pipe, PipeTransform } from '@angular/core';

import { Contact } from './contacto';

@Pipe({
  name: 'contactData'
})
export class ContactDataPipe implements PipeTransform {

  transform(value: Contact): string {
    let result: string;
    if (value.email && value.mobile) {
      result = `${value.email} | ${value.mobile}`
    } else if (value.email) {
      result = `${value.email}`
    } else if (value.mobile) {
      result = `${value.mobile}`
    } else {
      result = '';
    }
    return result; 
  }

}
