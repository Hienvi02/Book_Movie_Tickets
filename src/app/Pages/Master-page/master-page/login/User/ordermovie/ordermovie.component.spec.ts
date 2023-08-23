import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermovieComponent } from './ordermovie.component';

describe('OrdermovieComponent', () => {
  let component: OrdermovieComponent;
  let fixture: ComponentFixture<OrdermovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdermovieComponent]
    });
    fixture = TestBed.createComponent(OrdermovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
