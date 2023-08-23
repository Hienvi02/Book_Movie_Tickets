import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMovieComponent } from './crud-movie.component';

describe('CrudMovieComponent', () => {
  let component: CrudMovieComponent;
  let fixture: ComponentFixture<CrudMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudMovieComponent]
    });
    fixture = TestBed.createComponent(CrudMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
