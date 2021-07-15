import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private userService: UsuarioService, private router: Router) {}

  alert: boolean = false;
  alert2: boolean = false;

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

    
    if(name.value=="" || lastname.value=="" || dni.value=="" || email.value== "" || password.value=="" || passwordc.value==""){
      this.alert2 = true;
    }else{
      if (passwordc.value != password.value) {
        this.alert = true;
      } else {
        this.userService.login({
          name: name.value,
          lastname: lastname.value,
          dni: dni.value,
          email: email.value,
          password: password.value,
        });
  
        /** 
  
        name.value= '';
        lastname.value= '';
        dni.value= '';
        email.value= '';
        password.value= '';
        passwordc.value= '';
        */
  
        return false;
      }
    }
  }
}
