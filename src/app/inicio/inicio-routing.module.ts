import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent,
  children: [
    {
      path: 'home',
      component: IndexComponent,
      
    },
    {
      path: '**',
      redirectTo: 'home'
    }
   
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
