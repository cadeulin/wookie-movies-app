import { of } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent,
    mockMoviesService: jasmine.SpyObj<MoviesService>;

  beforeEach(() => {
    mockMoviesService = jasmine.createSpyObj('MoviesService', ['getMovies']);
    mockMoviesService.getMovies.and.returnValue(of(
      {
        movies: [<any> {
          genres: ['test']
        }]
      }));

    component = new HomepageComponent(mockMoviesService);
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
