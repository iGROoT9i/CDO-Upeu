import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

import { Router } from '@angular/router';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private userService: UsuarioService, private router: Router) {}

  alert: boolean = false;
  alert2: boolean = false;
  emailalert: boolean =false;

  ngOnInit(): void {}
  //JSON.stringify(data)
  //this.router.navigate(['login/ingresar']);

  addTask(
    name: HTMLInputElement,
    lastname: HTMLInputElement,
    dni: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    passwordc: HTMLInputElement
  ) {

    this.alert2=false;
    this.alert=false;
    this.emailalert=false;

    let user: Usuario[] = JSON.parse(localStorage.getItem("usuarios"));
    
    if(name.value=="" || lastname.value=="" || dni.value=="" || email.value== "" || password.value=="" || passwordc.value==""){
      this.alert2 = true;
    }else{
      if (passwordc.value != password.value) {
        this.alert = true;
      } else {


        if(user==null){

          this.userService.login({  
            name: name.value,
            lastname: lastname.value,
            dni: dni.value,
            email: email.value,
            password: password.value,
          });


          this.router.navigate(['/login/ingresar']);

        }else{

          user.forEach(element => {


            console.log(element.email + " " + email.value);
      
            if(element.email != email.value ){
  
            
  
  
            this.userService.login({  
              name: name.value,
              lastname: lastname.value,
              dni: dni.value,
              email: email.value,
              password: password.value,
            });
  
  
            this.router.navigate(['/login/ingresar']);
            
          } else {
            this.emailalert = true;
          }
  
  
        });
        }
  
        /** 
  
        name.value= '';
        lastname.value= '';
        dni.value= '';
        email.value= '';
        password.value= '';
        passwordc.value= '';
        */
  
        
      }
    }
  }
}
