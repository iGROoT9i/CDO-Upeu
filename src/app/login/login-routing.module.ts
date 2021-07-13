import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: LoginComponent ,
  children: [
    {
      path: 'ingresar',
      component: IngresarComponent,
      
    },
    {
      path: 'registro',
      component: RegistroComponent,
      
    },
    {
      path: '**',
      redirectTo: 'ingresar'
    }
   
  ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
