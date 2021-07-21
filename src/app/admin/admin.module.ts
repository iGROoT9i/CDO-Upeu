import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FooterComponent } from './footer/footer.component';
import { EventosComponent } from './eventos/eventos.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones.component';
import { PageComponent } from './page/page.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DocenteComponent } from './docente/docente.component';
import { NominaComponent } from './nomina/nomina.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    PerfilComponent,
    FooterComponent,
    EventosComponent,
    ArchivosComponent,
    InvitacionesComponent,
    EvaluacionesComponent,
    PageComponent,
    CategoriasComponent,
    DocenteComponent,
    NominaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
