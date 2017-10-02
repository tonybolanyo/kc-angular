import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Contact } from '../contacto';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  // @Input decorator exposes an attribute so a parent component
  // can link data to this child component
  @Input() contacts: Contact[];

  // @Output decorator exposes an event so, a parent component
  // can subscribe. This event must be an EventEmitter of desired type
  @Output() deleteButtonClicked = new EventEmitter<Contact>();

  @Output() selectedContact = new EventEmitter<Contact>();

  notifyContactDelete(contact: Contact): void {
    console.log('Parent, can you delete ' + contact + ', please?');
    // We notify event data to parent component (subscriber) using
    // emit method from our EventEmitter
    this.deleteButtonClicked.emit(contact);
  }

  notifySelectedContact(contact: Contact): void {
    this.selectedContact.emit(contact);
  }
}
