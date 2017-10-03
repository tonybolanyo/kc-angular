import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacto';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {

  @Input() contact: Contact;
  @Output() facebookButtonClicked = new EventEmitter<string>();
  @Output() twitterButtonClicked = new EventEmitter<string>();

  notifyFacebookClicked(): void {
    this.facebookButtonClicked.emit(this.makeFacebookPath());
  }

  notifyTwitterClicked(): void {
    this.twitterButtonClicked.emit(this.makeTwitterPath());
  }
  
  private makeFacebookPath(): string {
    return this.contact.facebook ? `https://www.facebook.com/${this.contact.facebook}` : null;
  }

  private makeTwitterPath(): string {
      return this.contact.twitter ? `https://twitter.com/${this.contact.twitter}` : null;
  }
}
