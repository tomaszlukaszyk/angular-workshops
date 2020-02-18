import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() movie: Movie;
  @Output() deleted = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  delete(user: Movie) {
    // some internal logic?
    this.deleted.emit(user);
    // some other logic after?
  }

}

