import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent,
    fixture: ComponentFixture<SearchComponent>,
    mockMoviesService: jasmine.SpyObj<MoviesService>;

  const mockMovies: Movies = {
    movies: [ <any> {
      title: 'test'
    }]
  };

  beforeEach(async(() => {
    mockMoviesService = jasmine.createSpyObj('MoviesService', ['searchMovie']);
    mockMoviesService.searchMovie.and.returnValue(of(mockMovies));

    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ searchQuery: 'test'}) } },
        { provide: MoviesService, useValue: mockMoviesService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#ngOnInit', () => {
    it('should define movies$', () => {
      component.ngOnInit();
      expect(component.movies$).toBeDefined();
    });
  });
});
