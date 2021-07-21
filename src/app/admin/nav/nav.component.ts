import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user = localStorage.getItem('usuario');
  otro: Usuario[];
  constructor(private router: Router, public taskService: UsuarioService) {}

  ngOnInit(): void {

    this.iniciar();
  }

  iniciar() {
    this.otro = this.taskService.getTasks();
    let user = localStorage.getItem('usuario');

    if (user == undefined) {
      this.router.navigate(['/login/ingresar']);
    } 
  }

  salir() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login/ingresar']);
  }
}
