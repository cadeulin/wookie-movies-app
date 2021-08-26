import { Router } from '@angular/router';
import { MoviesFacade } from 'src/app/stores/movies/movies.facade';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent,
    mockRouter: jasmine.SpyObj<Router>,
    mockMoviesFacade: jasmine.SpyObj<MoviesFacade>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockMoviesFacade = jasmine.createSpyObj('mockMoviesFacade', ['searchMovies']);

    component = new HeaderComponent(mockRouter, mockMoviesFacade);
  });

  it('should initialize component', () => {
    expect(component).toBeDefined();
  });

  describe('#search', () => {
    it('should navigate if search field has value', () => {
      component.searchForm.setValue('test');
      component.search();
      expect(mockMoviesFacade.searchMovies).toHaveBeenCalledWith('test');
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should not navigate if search field has no value', () => {
      component.searchForm.setValue(null);
      component.search();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });

    it('should not navigate if search field is same as prev value', () => {
      component.searchForm.setValue('test');
      component.prevKey = 'test';
      component.search();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });
});
