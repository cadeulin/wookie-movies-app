import { HttpHandler, HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';
import { TokenInterceptor } from './token.interceptor';


describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let handler: jasmine.SpyObj<HttpHandler>;

  beforeEach(() => {
    handler = jasmine.createSpyObj('HttpHandler', ['handle']);
    interceptor = new TokenInterceptor();
  });

  describe('#intercept', () => {
    it('should call the handler', (done: DoneFn) => {
      const request = new HttpRequest('GET', '');
      handler.handle = jasmine.createSpy().and.returnValue(of({}));
      interceptor.intercept(request, handler).subscribe(() => {
        expect(handler.handle).toHaveBeenCalled();
        done();
      })
    });
  });
});
