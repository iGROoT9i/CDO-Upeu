import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**',redirectTo:'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
