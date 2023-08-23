import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOrderComponent } from './screen-order.component';

describe('ScreenOrderComponent', () => {
  let component: ScreenOrderComponent;
  let fixture: ComponentFixture<ScreenOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenOrderComponent]
    });
    fixture = TestBed.createComponent(ScreenOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
