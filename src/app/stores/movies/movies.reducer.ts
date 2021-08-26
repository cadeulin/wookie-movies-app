import { createReducer, on, Action, MemoizedSelector, createFeatureSelector, createSelector, DefaultProjectorFn } from '@ngrx/store';
import { cloneDeep, find } from 'lodash';
import { Movie } from 'src/app/models/movie';
import { MoviesAction } from './movies.actions';


export interface MoviesState {
  moviesData: Movie[];
  searchMoviesData: Movie[];
}

export interface RootState {
  movies: MoviesState;
}

export const initialState: MoviesState = {
  moviesData: [],
  searchMoviesData: []
}

const reducer = createReducer(
  initialState,
  on(MoviesAction.movies.response, (state, { payload }) => {
    state.moviesData = payload.movies;
    return state;
  }),
  on(MoviesAction.searchMovies.response, (state, { payload }) => {
    state.searchMoviesData = payload.movies;
    return state;
  })
);

export function MoviesReducer(
  state: MoviesState,
  action: Action
): MoviesState {
  const newState = cloneDeep(state);
  return reducer(newState, action);
}

export const selectFeature = (state: RootState) => state.movies;

export const selectMovies = createSelector(
  selectFeature,
  (state: MoviesState) => state.moviesData
);

export const selectSearchMovies = createSelector(
  selectFeature,
  (state: MoviesState) => state.searchMoviesData
);

export const selectMovie = (id: string) => createSelector(
  selectFeature,
  (state: MoviesState) => find(state.moviesData, { id: id })
);
