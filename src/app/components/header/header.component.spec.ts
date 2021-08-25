import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent,
    mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    component = new HeaderComponent(mockRouter);
  });

  it('should initialize component', () => {
    expect(component).toBeDefined();
  });

  describe('#search', () => {
    it('should navigate if search field has value', () => {
      component.searchForm.setValue('test');
      component.search();
      expect(mockRouter.navigate).toHaveBeenCalled();
    });

    it('should not navigate if search field has no value', () => {
      component.searchForm.setValue(null);
      component.search();
      expect(mockRouter.navigate).not.toHaveBeenCalled();
    });
  });
});
