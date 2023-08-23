import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMovieComponent } from './pay-movie.component';

describe('PayMovieComponent', () => {
  let component: PayMovieComponent;
  let fixture: ComponentFixture<PayMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayMovieComponent]
    });
    fixture = TestBed.createComponent(PayMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
