import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RutaAComponent } from '../ruta-a/ruta-a.component'
import { RutaBComponent } from '../ruta-b/ruta-b.component'

const routes: Routes = [
  {
    path: 'contact-list',
    component: RutaAComponent
  }, {
    path: 'new-contact',
    component: RutaBComponent
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/contact-list'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
