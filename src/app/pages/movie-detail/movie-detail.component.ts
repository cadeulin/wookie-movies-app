import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  rating: number;
  movie: Movie;
  stars = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((response) => {
      const movies = response.movies;
      const movieId = this.route.snapshot.url[1].path;
      this.movie = movies.filter((e) => e.id === movieId)[0];
      this.rating = Math.round((this.movie.imdb_rating * 5) / 10);
    });
  }

}
