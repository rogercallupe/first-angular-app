import { Component, Input, Output, EventEmitter} from '@angular/core';

import { type User } from './user.model'; // Assuming you have a User model defined
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent] // Add any necessary imports here, e.g., FormsModule if needed
})

export class UserComponent {
  @Input ({required: true}) user!: User;
  @Input ({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

   onSelectUser() {
    this.select.emit(this.user.id);
   }
}