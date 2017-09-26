import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  // @Input decorator exposes an attribute so a parent component
  // can link data to this child component
  @Input() contacts: string[];

}
