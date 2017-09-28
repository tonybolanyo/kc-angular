import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  formContact: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.formContact = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  saveContact() {
    console.log(this.formContact.value);
  }
}
