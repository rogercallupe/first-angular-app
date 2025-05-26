import { Component, Input, Output, EventEmitter} from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// or
interface User {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input ({required: true}) id!: string;
  // @Input ({required: true}) avatar!: string;
  // @Input ({required:true}) name!: string;
  // or
  @Input ({required: true}) user!: User;

  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

   onSelectUser() {
    this.select.emit(this.user.id);
   }
}