import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    InicioComponent,
    IndexComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
