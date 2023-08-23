import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProplemComponent } from './add-proplem.component';

describe('AddProplemComponent', () => {
  let component: AddProplemComponent;
  let fixture: ComponentFixture<AddProplemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProplemComponent]
    });
    fixture = TestBed.createComponent(AddProplemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
