import { of } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent,
    mockMoviesFacade: jasmine.SpyObj<MoviesFacade>;

  const mockMovies: Movie[] = [
    <any> {
      title: 'test'
    }
  ];

  beforeEach(() => {
    mockMoviesFacade = jasmine.createSpyObj('mockMoviesFacade', ['getMovies']);
    mockMoviesFacade.getMovies.and.returnValue(of(mockMovies));

    component = new HomepageComponent(mockMoviesFacade);
  });

  describe('#ngOnInit', () => {
    it('should initialize component', () => {
      component.ngOnInit();
      expect(component.movies).toBeDefined();
      expect(component.categories).toBeDefined();
    });
  });

  describe('#filterMovies', () => {
    it('should filter movie list', () => {
      component.movies = [<any> {
        genres: ['test']
      }]
      const result = component.filterMovies('test');
      expect(result.length).toBe(1);
    });
  });
});
