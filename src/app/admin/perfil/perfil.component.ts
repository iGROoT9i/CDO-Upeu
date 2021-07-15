import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  tasks: Usuario[];

  otro: Usuario[];

  nombre: string;
  apellido: string;
  email: string;
  dni:string;


  constructor(public taskService: UsuarioService) {}

  ngOnInit(): void {
    this.otro = this.taskService.getTasks();
    let user = localStorage.getItem('usuario');

    this.otro.forEach((element) => {
      if (user == element.name) {
        this.nombre = element.name;
        this.apellido = element.lastname;
        this.dni = element.dni;
        this.email = element.email;
      }
    });

    console.log(this.tasks + '...' + this.taskService.getTasks());
  }


  actualizar(){
    
  }
}
