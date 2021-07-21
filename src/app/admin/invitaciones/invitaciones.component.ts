import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-invitaciones',
  templateUrl: './invitaciones.component.html',
  styleUrls: ['./invitaciones.component.css']
})
export class InvitacionesComponent implements OnInit {


  task: Usuario[];

  constructor(public taskService: UsuarioService) { }

  ngOnInit(): void {
    this.initial();
  }


  initial(){
    this.task = this.taskService.getTasks();
  }

}
