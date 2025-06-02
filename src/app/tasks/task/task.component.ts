import { Component, inject, Input} from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component"; // Assuming you have a Task model defined
import { DatePipe } from '@angular/common'; // Import DatePipe for date formatting
import { TasksService } from '../tasks.service'; // Importing TasksService


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe], // Import CardComponent and DatePipe
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
