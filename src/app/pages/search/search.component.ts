import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map, distinctUntilChanged } from 'rxjs/operators';
import { Movie, Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies$: Observable<Movie[]>;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.movies$ = this.route.queryParams.pipe(
      distinctUntilChanged(),
      switchMap((params: Params) => this.moviesService.searchMovie(params['searchQuery'])),
      map((response: Movies) => {
        return sortBy(response.movies, 'title');
      })
    );
  }

}
