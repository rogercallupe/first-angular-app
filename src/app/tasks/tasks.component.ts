import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component'; // Importing the TaskComponent
import { NewTaskComponent } from './new-task/new-task.component'; // Importing the NewTaskComponent

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

tasks = [
    { id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Lear all the basic and advanced features of Angular & how to apply them in real-world applications.',
      dueDate: '2025-12-31'
    },
    {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }
}
