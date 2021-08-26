import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesAction } from './movies.actions';

@Injectable()
export class MoviesEffects {
  movies$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesAction.movies.request),
      switchMap(() => this.moviesService.getMovies()),
      map(response => {
        return MoviesAction.movies.response({ payload: response });
      })
    ));

  searchMovies$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesAction.searchMovies.request),
      map((action) => action.payload),
      switchMap((key: string) => this.moviesService.searchMovie(key)),
      map(response => {
        return MoviesAction.searchMovies.response({ payload: response });
      })
    ));

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

}
