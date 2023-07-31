import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Task } from '../Interface/task.interface';

@Component({
  selector: 'app-list-of-task',
  templateUrl: './list-of-task.component.html',
  styleUrls: ['./list-of-task.component.css']
})
export class ListOfTaskComponent implements OnInit {
  taskForm!:FormGroup;
  tasks: Task[] = [];
  errorTask: string = '';
  taskPendding: Task[] = [];
  taskCompleted: Task[] = [];
 

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.loadLocalStorage();
  }

  createForm(){
    this.taskForm = this.formBuilder.group({
      newTask: ["", Validators.required]
    })
  }

  addTask() {
    if (this.taskForm.invalid) {
      this.errorTask = 'Por favor, ingresa los datos de la nueva tarea';
      setTimeout(() => {
        this.errorTask = ''; // Borra el mensaje de error después de 3 segundos
      }, 1000);
      return;
    }
    this.errorTask = '';
    this.tasks.push({ task: this.taskForm.value.newTask, completed: false });
    this.taskForm.reset();
    this.savedLocalStorage();
    this.updateTasks();
   
  }

  savedLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadLocalStorage() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
      this.updateTasks();
    }
  }

  onTaskChange(task: Task) {
    this.savedLocalStorage();
    this.updateTasks();
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.savedLocalStorage();
      this.updateTasks();
    }
  }

  updateTasks(){
    
    this.taskPendding = this.tasks.filter((task) => !task.completed);
    this.taskCompleted = this.tasks.filter((task) => task.completed);
  }
}



