import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie>;
  rating: number;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private moviesFacade: MoviesFacade
  ) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.url[1].path;
    this.movie$ = this.moviesFacade.getMovieById(movieId).pipe(
      take(1),
      tap((movie: Movie) => {
        this.rating = Math.round((movie.imdb_rating * 5) / 10);
      }),
      map((movie: Movie) => {
        return movie;
      })
    );
  }

}
