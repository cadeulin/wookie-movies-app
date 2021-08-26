import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { filter } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MoviesAction, storeName } from './movies.actions';
import { MoviesState, selectMovie, selectMovies, selectSearchMovies } from "./movies.reducer";


@Injectable()
export class MoviesFacade {
  state: Observable<MoviesState>;

  constructor(
    private store: Store<any>
  ) {
    this.state = this.store.select(storeName);
  }

  getState(): Observable<MoviesState> {
    return this.state.pipe(filter((state: MoviesState) => !!state));
  };

  loadMovies(): void {
    this.store.dispatch(MoviesAction.movies.request());
  };

  searchMovies(key: string): void {
    this.store.dispatch(MoviesAction.searchMovies.request({ payload: key }));
  };

  getMovies(): Observable<Movie[]> {
    return this.store.select(selectMovies);
  };

  getMovieById(id: string): Observable<Movie> {
    return this.store.select(selectMovie(id));
  }

  getSearchMovies(): Observable<Movie[]> {
    return this.store.select(selectSearchMovies);
  };

};
