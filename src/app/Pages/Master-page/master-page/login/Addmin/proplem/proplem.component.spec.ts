import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProplemComponent } from './proplem.component';

describe('ProplemComponent', () => {
  let component: ProplemComponent;
  let fixture: ComponentFixture<ProplemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProplemComponent]
    });
    fixture = TestBed.createComponent(ProplemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
