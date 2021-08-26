import { of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent,
    mockMoviesFacade: jasmine.SpyObj<MoviesFacade>;

  const mockMovies: Movie[] = [
    <any> {
      title: 'test'
    }
  ];

  beforeEach(() => {
    mockMoviesFacade = jasmine.createSpyObj('MoviesFacade', ['getSearchMovies']);
    mockMoviesFacade.getSearchMovies.and.returnValue(of(mockMovies));

    component = new SearchComponent(mockMoviesFacade);
  });

  describe('#ngOnInit', () => {
    it('should define movies$', () => {
      component.ngOnInit();
      expect(component.movies$).toBeDefined();
    });
  });
});
