import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: AdminComponent ,
  children: [
    {
      path: 'perfil',
      component: PerfilComponent,
      
    },
    {
      path: 'footer',
      component: FooterComponent,
      
    },
    {
      path: '**',
      redirectTo: ''
    }
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
