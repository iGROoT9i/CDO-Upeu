import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { UsuarioService } from '../../services/usuario.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuarios: Usuario[]= [];

  otro: Usuario[];

  nombre: string;
  apellido: string;
  email1: string;
  dni1:string;


  constructor(public taskService: UsuarioService,private router:Router) {}

  ngOnInit(): void {
    this.listar();

  }



  

  listar(){


    this.otro = this.taskService.getTasks();
    let user = localStorage.getItem('usuario');

    

      this.otro.forEach((element) => {
        if (user == element.email) {
          this.nombre = element.name;
          this.apellido = element.lastname;
          this.dni1 = element.dni;
          this.email1 = element.email;
        }
      });

    


   
  }

  actualizar(
    name: HTMLInputElement,
    lastname: HTMLInputElement,
    dni: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement
  ){
    
    this.usuarios = this.taskService.getTasks();
    let user = localStorage.getItem('usuario');

   for(let i=0;i<this.usuarios.length;i++){

    if(this.usuarios[i].email== user){

      if(name.value!=""){
        this.usuarios[i].name=name.value;
      }
      if(lastname.value!=""){
        this.usuarios[i].lastname=lastname.value;

      }
      if(dni.value!=""){
        this.usuarios[i].dni=dni.value;

      }
      if(email.value!=""){
        this.usuarios[i].email=email.value;

      }
      if(password.value!=""){
        this.usuarios[i].password=password.value;

      }
      
    }

   }

   localStorage.setItem("usuarios",JSON.stringify(this.usuarios));
    
  }
}
