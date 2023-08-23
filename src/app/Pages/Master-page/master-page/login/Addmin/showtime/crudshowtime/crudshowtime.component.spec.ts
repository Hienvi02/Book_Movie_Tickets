import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudshowtimeComponent } from './crudshowtime.component';

describe('CrudshowtimeComponent', () => {
  let component: CrudshowtimeComponent;
  let fixture: ComponentFixture<CrudshowtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudshowtimeComponent]
    });
    fixture = TestBed.createComponent(CrudshowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
