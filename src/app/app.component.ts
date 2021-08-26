import { Component, OnInit } from '@angular/core';
import { MoviesFacade } from './stores/movies/movies.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'wookie-movies-app';

  constructor(
    private moviesFacade: MoviesFacade
  ) { }

  ngOnInit(): void {
    this.moviesFacade.loadMovies();
  }
}
