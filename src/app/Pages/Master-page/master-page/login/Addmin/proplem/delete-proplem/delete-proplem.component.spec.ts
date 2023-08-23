import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProplemComponent } from './delete-proplem.component';

describe('DeleteProplemComponent', () => {
  let component: DeleteProplemComponent;
  let fixture: ComponentFixture<DeleteProplemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteProplemComponent]
    });
    fixture = TestBed.createComponent(DeleteProplemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
