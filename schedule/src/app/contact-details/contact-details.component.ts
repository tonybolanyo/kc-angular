import { Component, Input } from '@angular/core';
import { Contact } from '../contacto';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  @Input() contact: Contact;
}
