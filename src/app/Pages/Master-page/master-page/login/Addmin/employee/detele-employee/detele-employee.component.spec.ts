import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleEmployeeComponent } from './detele-employee.component';

describe('DeteleEmployeeComponent', () => {
  let component: DeteleEmployeeComponent;
  let fixture: ComponentFixture<DeteleEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeteleEmployeeComponent]
    });
    fixture = TestBed.createComponent(DeteleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
