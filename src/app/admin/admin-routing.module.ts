import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { EventosComponent } from './eventos/eventos.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { PageComponent } from './page/page.component';
import { CategoriasComponent } from './categorias/categorias.component';

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
      path: 'legajos',
      component: EventosComponent,
      
    },
    {
      path: 'archivos',
      component: ArchivosComponent,
      
    },
    {
      path: 'invitaciones',
      component: InvitacionesComponent,
      
    },
    {
      path: 'evaluaciones',
      component: EvaluacionesComponent,
      
    },
    {
      path: 'page',
      component: PageComponent,
      
    },
    {
      path: 'categoria',
      component: CategoriasComponent,
      
    },
    {
      path: '**',
      redirectTo: 'perfil'
    }
   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
