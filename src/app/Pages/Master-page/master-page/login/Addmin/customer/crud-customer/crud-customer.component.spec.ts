import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCustomerComponent } from './crud-customer.component';

describe('CrudCustomerComponent', () => {
  let component: CrudCustomerComponent;
  let fixture: ComponentFixture<CrudCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudCustomerComponent]
    });
    fixture = TestBed.createComponent(CrudCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
