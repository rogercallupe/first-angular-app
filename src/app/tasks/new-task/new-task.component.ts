import { Component, EventEmitter, Output, inject, Input } from '@angular/core';

import { TasksService } from '../tasks.service'; // Importing TasksService

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string; // Using ! to assert that userId will be provided
  @Output() close = new EventEmitter<void>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService); // Injecting TasksService

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask(
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
      this.userId
    );
    this.close.emit(); // Emit close event to notify parent component
  }

}