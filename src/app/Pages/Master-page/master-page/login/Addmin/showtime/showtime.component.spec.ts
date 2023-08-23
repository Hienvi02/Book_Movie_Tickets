import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtimeComponent } from './showtime.component';

describe('ShowtimeComponent', () => {
  let component: ShowtimeComponent;
  let fixture: ComponentFixture<ShowtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowtimeComponent]
    });
    fixture = TestBed.createComponent(ShowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
