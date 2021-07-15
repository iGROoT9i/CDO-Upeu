import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    IngresarComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
