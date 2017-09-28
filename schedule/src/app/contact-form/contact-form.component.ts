import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../contacto';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  formContact: FormGroup;
  @Output() saveButtonClicked = new EventEmitter<Contact>();

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formContact = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  notifyContactSave() {
    const contact: Contact = this.formContact.value as Contact;
    this.saveButtonClicked.emit(contact);
    console.log("emitted");
  }
}
