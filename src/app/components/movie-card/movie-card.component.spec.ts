import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;

  beforeEach(() => {
    component = new MovieCardComponent();
  });

  it('should initialize component', () => {
    expect(component).toBeDefined();
  });
});
