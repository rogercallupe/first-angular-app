import { Component, Injectable, Input } from '@angular/core';
import { TaskComponent } from './task/task.component'; // Importing the TaskComponent
import { NewTaskComponent } from './new-task/new-task.component'; // Importing the NewTaskComponent
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent] // Importing the TaskComponent and NewTaskComponent
})
export class TasksComponent {
  @Input({required: true}) userId!: string; // Using ! to assert that id will be provided
  @Input({required: true}) name!: string;
  isAddingTask= false;

  constructor(private tasksService: TasksService) {}



  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
   
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
   
 //   this.isAddingTask = false;
  }
}
