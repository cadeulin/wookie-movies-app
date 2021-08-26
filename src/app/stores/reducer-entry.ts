import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromMovies from '../stores/movies/movies.reducer';
import { storeName } from './movies/movies.actions';

export const reducers = {
  [storeName]: fromMovies.MoviesReducer
};

export interface State extends fromMovies.RootState {}

export const reducerToken: any = new InjectionToken<ActionReducerMap<State>>('Registered Reducers');
