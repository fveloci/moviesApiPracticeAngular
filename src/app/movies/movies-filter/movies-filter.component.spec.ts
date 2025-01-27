import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFilterComponent } from './movies-filter.component';

describe('MoviesFilterComponent', () => {
  let component: MoviesFilterComponent;
  let fixture: ComponentFixture<MoviesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
