import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShowtimeComponent } from './update-showtime.component';

describe('UpdateShowtimeComponent', () => {
  let component: UpdateShowtimeComponent;
  let fixture: ComponentFixture<UpdateShowtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShowtimeComponent]
    });
    fixture = TestBed.createComponent(UpdateShowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
