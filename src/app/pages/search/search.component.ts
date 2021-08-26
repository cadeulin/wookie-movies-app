import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { sortBy } from 'lodash';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private moviesFacade: MoviesFacade
  ) { }

  ngOnInit(): void {
    this.movies$ = this.moviesFacade.getSearchMovies().pipe(
      map((response: Movie[]) => {
        return sortBy(response, 'title');
      })
    );
  }

}
