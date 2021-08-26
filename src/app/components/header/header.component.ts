import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { isEqual } from 'lodash';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Wookie Movies';
  searchForm = new FormControl();
  prevKey: string;

  constructor(
    private route: Router,
    private moviesFacade: MoviesFacade
  ) { }

  search() {
    const key = this.searchForm.value;
    if (key && !isEqual(key, this.prevKey)) {
      this.prevKey = key;
      this.moviesFacade.searchMovies(key);
      this.route.navigate(['/search']);
    }
  }

}
