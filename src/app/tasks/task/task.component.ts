import { Component, inject, Input} from '@angular/core';
import { type Task } from './task.model';

import { TasksService } from '../tasks.service'; // Importing TasksService


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  private tasksService = inject(TasksService); // Injecting TasksService


  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }

}
