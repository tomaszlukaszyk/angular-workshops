import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  @Input() editedMovie: Movie;

  constructor(private moviesService: MoviesService) { }

  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    releaseDate: new FormControl('', [Validators.required, Validators.minLength(5)]),
    director: new FormControl(''),
    genres: new FormControl(''),
  });

  logForm() {
    console.log(this.movieForm.value);
  }

  ngOnInit(): void {
  }

  setDefault() {
    // this.movieForm.title.setValue('Dummy movie');
  }

}
