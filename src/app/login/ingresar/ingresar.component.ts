import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interface/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
})
export class IngresarComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  alert: boolean = false;

  email1: boolean = false;

  entrar() {
    let user: Usuario[] = JSON.parse(localStorage.getItem('usuarios'));

    //for (let i = 0; i < user.length + 1; i++) {

    //}

    user.forEach((element) => {
      if (element.email == this.email) {
        if (element.password == this.password) {
          localStorage.setItem('usuario', element.email);

          this.email1 = true;
          this.router.navigate(['/admin/perfil']);
        } else {
          
        }
      } else {
        
      }
    });
    

    if (this.email1) {
      this.alert = false;
    }else{
      this.alert = true;
    }
  }
}
