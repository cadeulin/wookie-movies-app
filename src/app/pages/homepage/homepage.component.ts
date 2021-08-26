import { Component, OnInit } from '@angular/core';
import { take, filter } from 'rxjs/operators';
import { Movie, } from 'src/app/models/movie';
import { sortBy, flattenDeep, uniq, map, isEmpty, filter as _filter } from 'lodash';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';

export interface SortedMovies {
  category: string;
  movies: Movie[];
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movies: Movie[];
  categories: string[];

  constructor(
    private moviesFacade: MoviesFacade
  ) { }

  ngOnInit(): void {
    this.moviesFacade.getMovies().pipe(
      filter((movies: Movie[]) => !isEmpty(movies)),
      take(1)
    ).subscribe((response: Movie[]) => {
      const movies = response;
      this.movies = movies;
      this.categories = sortBy(uniq(flattenDeep(map(movies, 'genres'))));
    });
  }

  filterMovies(category: string): Movie[] {
    const filteredMovies = _filter(this.movies, (movie: Movie) => {
      return movie.genres.includes(category);
    });
    return sortBy(filteredMovies, 'title');
  }

}
