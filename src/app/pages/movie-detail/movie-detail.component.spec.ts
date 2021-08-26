import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent,
    mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>,
    mockMoviesFacade: jasmine.SpyObj<MoviesFacade>;

  beforeEach(() => {
    mockActivatedRoute = <any> {
      snapshot: { url: [
        {},
        { path: 'test'}
      ]}
    };
    mockMoviesFacade = jasmine.createSpyObj('mockMoviesFacade', ['getMovieById']);
    mockMoviesFacade.getMovieById.and.returnValue(of(<any> {
      id: 'test',
      imdb_rating: 9
    }));

    component = new MovieDetailComponent(mockActivatedRoute, mockMoviesFacade);
  });

  describe('#ngOnInit', () => {
    it('should initialize component', (done: DoneFn) => {
      component.ngOnInit();
      component.movie$.subscribe(movie => {
        expect(component.rating).toBe(5);
        expect(movie.id).toBe('test');
        done();
      });
    });
  });
});
