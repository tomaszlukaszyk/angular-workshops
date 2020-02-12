import { Component, OnInit } from '@angular/core';
import { users } from 'src/mock-data/mock-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  users: User[];
  inputValue: string;
  today: Date;

  ngOnInit() {
    this.today = new Date();
    this.users = users.sort(this.compareName);
  }

  compareName(firstElement: User, secondElement: User) {
    if (firstElement.lastName < secondElement.lastName) {
      return -1;
    }
    if (firstElement.lastName > secondElement.lastName) {
      return 1;
    }
    return 0;
  }

  warnUser() {
    alert('You clicked me you bastard!');
  }

  delete(user: User) {
    this.users = this.users.filter((u) => user.id !== u.id );
  }

}
