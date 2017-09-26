import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsService } from './contacts.service';

// @NgModule decorator is used here so the 
// AppModule acts like a module.
@NgModule({
  // on 'declarations' we declare all components
  // pipes and directives used by application
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  // on 'imports' we declare all modules which
  // our application depends on
  imports: [
    BrowserModule
  ],
  // on 'providers' we declare all providers to be injected
  providers: [
    ContactsService
  ],
  // on 'bootstrap' we declare the root component to construct
  // the application
  bootstrap: [AppComponent]
})
export class AppModule { }
