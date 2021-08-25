import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movie';

export const BASE_URL = 'https://wookie.codesubmit.io/movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${BASE_URL}`);
  }

  searchMovie(searchQuery: string): Observable<Movies> {
    const url = `${BASE_URL}?q=${searchQuery}`;
    return this.http.get<Movies>(url);
  }
}
