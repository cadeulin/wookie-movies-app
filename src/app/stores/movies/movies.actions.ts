import { createAction, props } from "@ngrx/store";

export const storeName = 'movies';

export const MoviesAction = {
  movies: {
    request: createAction(`Request Movies`),
    response: createAction(`Response Movies`, props<{ payload: any }>())
  },
  searchMovies: {
    request: createAction(`Request Search Movies`, props<{ payload: string }>()),
    response: createAction(`Response Search Movies`, props<{ payload: any }>())
  }
}
