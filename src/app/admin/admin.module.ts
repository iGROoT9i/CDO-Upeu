import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    PerfilComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
