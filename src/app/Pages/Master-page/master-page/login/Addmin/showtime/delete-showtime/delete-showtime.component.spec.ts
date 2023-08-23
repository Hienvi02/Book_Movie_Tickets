import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteShowtimeComponent } from './delete-showtime.component';

describe('DeleteShowtimeComponent', () => {
  let component: DeleteShowtimeComponent;
  let fixture: ComponentFixture<DeleteShowtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteShowtimeComponent]
    });
    fixture = TestBed.createComponent(DeleteShowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
