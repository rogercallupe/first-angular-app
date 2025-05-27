import { Component, EventEmitter, Input, Output} from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component"; // Assuming you have a Task model defined
import { DatePipe } from '@angular/common'; // Import DatePipe for date formatting

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe], // Import CardComponent and DatePipe
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output () complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }

}
