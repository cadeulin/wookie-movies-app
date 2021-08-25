import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { BASE_URL, MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let mockHttp: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
    mockHttp.get.and.returnValue(of({}));
    service = new MoviesService(mockHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getMovies', () => {
    it('should call the service and fetch movies data', () => {
      service.getMovies();
      expect(mockHttp.get).toHaveBeenCalledWith(BASE_URL);
    });
  });

  describe('#searchMovie', () => {
    it('should call the service and fetch the movie data', () => {
      service.searchMovie('test');
      expect(mockHttp.get).toHaveBeenCalledWith(`${BASE_URL}?q=test`);
    });
  });
});
