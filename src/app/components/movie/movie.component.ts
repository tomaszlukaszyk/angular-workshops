import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

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

