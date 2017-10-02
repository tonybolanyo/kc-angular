import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contacto';
import { environment } from '../environments/environment';

// @Injectable decorator indicates that this class
// acts like a service
@Injectable()
export class ContactsService {

  constructor( private _httpClient: HttpClient) {

  }

  getContacts(): Observable<Contact[]> {
    return this._httpClient.get<Contact[]>(`${environment.apiUrl}/contacts`);
  }

  addContact(contact: Contact): Observable<Contact> {
    return this._httpClient.post<Contact>(`${environment.apiUrl}/contacts`, contact);
  }

  deleteContact(contact: Contact): Observable<Contact> {
    return this._httpClient.delete<Contact>(`${environment.apiUrl}/contacts/${contact.id}`);
  }
}
