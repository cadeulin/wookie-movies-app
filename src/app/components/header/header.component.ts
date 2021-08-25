import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Wookie Movies';
  searchForm = new FormControl();

  constructor(
    private route: Router
  ) { }

  search() {
    if (this.searchForm.value) {
      this.route.navigate(
        ['/search'],
        {
          queryParams: { searchQuery: this.searchForm.value },
        }
      );
    }
  }

}
