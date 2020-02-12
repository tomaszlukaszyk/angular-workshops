import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() childUser: User;
  @Output() deleted = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  delete(user: User) {
    // some internal logic?
    this.deleted.emit(user);
    // some other logic after?
  }

}

