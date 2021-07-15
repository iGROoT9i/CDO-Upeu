import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  tasks: Usuario[]= [];


  constructor(private router: Router ) { }

  getTasks() {
    if(localStorage.getItem('usuarios') === null) {
      this.tasks = [];
    } else {
      
      this.tasks = JSON.parse(localStorage.getItem('usuarios'));

    }
    return this.tasks;
  }











  login(task: Usuario) {
    this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('usuarios') === null) {
      tasks = [];
      tasks.push(task);
      localStorage.setItem('usuarios', JSON.stringify(tasks));
    this.router.navigate(['login/ingresar']);

    } else {
      tasks = JSON.parse(localStorage.getItem('usuarios'));
      tasks.push(task); 
      localStorage.setItem('usuarios', JSON.stringify(tasks));
    this.router.navigate(['login/ingresar']);

    }
  }









  addTask(task: Usuario) {
    this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task); 
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  deleteTask(task: Usuario) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
