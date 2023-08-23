import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudemployeeComponent } from './crudemployee.component';

describe('CrudemployeeComponent', () => {
  let component: CrudemployeeComponent;
  let fixture: ComponentFixture<CrudemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudemployeeComponent]
    });
    fixture = TestBed.createComponent(CrudemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
