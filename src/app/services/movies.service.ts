import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = environment.apiUrl;

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(
      `${this.apiUrl}/movies`
      );
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(
      `${this.apiUrl}/movies`,
      movie
    );
  }
}
