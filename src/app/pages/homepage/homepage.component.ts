import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Movie, Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { sortBy, flattenDeep, uniq, map, filter } from 'lodash';

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
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .pipe(take(1))
      .subscribe((response: Movies) => {
        const movies = response.movies
        this.movies = movies;
        this.categories = sortBy(uniq(flattenDeep(map(movies, 'genres'))));
      });
  }

  filterMovies(category: string): Movie[] {
    const filteredMovies = filter(this.movies, (movie: Movie) => {
      return movie.genres.includes(category);
    });
    return sortBy(filteredMovies, 'title');
  }

}
