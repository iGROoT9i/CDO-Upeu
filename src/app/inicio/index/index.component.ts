import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private taskService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  /* 
  
  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTask() {
    this.taskService.getTask('2')
    .subscribe(task => {
      console.log(task);
    });
  }

  createTask() {
    const task = {
      userId: '1',
      title: 'change title',
      completed: true
    };
    this.taskService.createTask(task)
    .subscribe((newTask) => {
      console.log(newTask);
    });
  }

  updateTask() {
    const task = {
      id: '200',
      userId: '1',
      title: 'por otro titulo',
      completed: true
    };
    this.taskService.updateTask(task)
    .subscribe(todo => {
      console.log(todo);
    });
  }

  deleteTask() {
    this.taskService.deleteTask('1')
    .subscribe((data) => {
      console.log(data);
    });
  }

  */

}
