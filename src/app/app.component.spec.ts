import { AppComponent } from './app.component';
import { MoviesFacade } from './stores/movies/movies.facade';

describe('AppComponent', () => {
  let component: AppComponent,
  mockMoviesFacade: jasmine.SpyObj<MoviesFacade>;

  beforeEach(() => {
    mockMoviesFacade = jasmine.createSpyObj('MoviesFacade', ['loadMovies']);
    component = new AppComponent(mockMoviesFacade);
  });

  describe('#ngOnInit', () => {
    it('should load movies', () => {
      component.ngOnInit();
      expect(mockMoviesFacade.loadMovies).toHaveBeenCalled();
    });
  });
});
