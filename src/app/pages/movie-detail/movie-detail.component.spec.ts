import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Movies } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent,
    fixture: ComponentFixture<MovieDetailComponent>,
    mockMoviesService: jasmine.SpyObj<MoviesService>;

  const mockMovies: Movies = {
    movies: [ <any> {
      id: 'test',
      imdb_rating: 9
    }]
  };

  beforeEach(async(() => {
    mockMoviesService = jasmine.createSpyObj('MoviesService', ['getMovies']);
    mockMoviesService.getMovies.and.returnValue(of(mockMovies));

    TestBed.configureTestingModule({
      declarations: [ MovieDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute, useValue: { snapshot: { url: [
            {},
            { path: 'test'}
          ]}}
        },
        { provide: MoviesService, useValue: mockMoviesService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('#ngOnInit', () => {
    it('should initialize component', () => {
      component.ngOnInit();
      expect(component.movie.id).toBe('test');
      expect(component.rating).toBe(5);
    });
  });
});
