import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsService } from './contacts.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RutaAComponent } from './ruta-a/ruta-a.component';
import { RutaBComponent } from './ruta-b/ruta-b.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactDataPipe } from './contact-data.pipe';

// @NgModule decorator is used here so the 
// AppModule acts like a module.
@NgModule({
  // on 'declarations' we declare all components
  // pipes and directives used by application
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent,
    RutaAComponent,
    RutaBComponent,
    ContactDetailsComponent,
    ContactDataPipe
  ],
  // on 'imports' we declare all modules which
  // our application depends on
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
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
