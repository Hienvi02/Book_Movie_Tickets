import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProlemComponent } from './update-prolem.component';

describe('UpdateProlemComponent', () => {
  let component: UpdateProlemComponent;
  let fixture: ComponentFixture<UpdateProlemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProlemComponent]
    });
    fixture = TestBed.createComponent(UpdateProlemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
