import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  movies$: Observable<Movie[]>;
  inputValue: string;
  today: Date;

  ngOnInit() {
    this.today = new Date();
    this.movies$ = this.moviesService.getMovies().pipe(
      map(movies => {
        return movies.filter(u => u.id > 2);
      })
    );
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

}
