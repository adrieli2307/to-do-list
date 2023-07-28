import { Component } from '@angular/core';
import { Task } from '../Interface/task.interface';

@Component({
  selector: 'app-list-of-task',
  templateUrl: './list-of-task.component.html',
  styleUrls: ['./list-of-task.component.css']
})
export class ListOfTaskComponent {
  tasks: Task[] = [];
  newTask: string = '';
  errorTask: string = '';
  taskPendding: Task[] = [];
  taskCompleted: Task[] = [];

  ngOnInit() {
    this.loadLocalStorage();
  }

  addTask() {
    if (this.newTask.trim() === '') {
      this.errorTask = 'Por favor, ingresa los datos de la nueva tarea';
      setTimeout(() => {
        this.errorTask = ''; // Borra el mensaje de error después de 3 segundos
      }, 1000);
      return;
    }
    this.errorTask = '';
    this.tasks.push({ task: this.newTask, completed: false });
    this.newTask = '';
    this.savedLocalStorage();
  }

  savedLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadLocalStorage() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  onTaskChange(task: Task) {
    this.savedLocalStorage();
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.savedLocalStorage();
    }
  }
}



