import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringprodsComponent } from './filteringprods.component';

describe('FilteringprodsComponent', () => {
  let component: FilteringprodsComponent;
  let fixture: ComponentFixture<FilteringprodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteringprodsComponent]
    });
    fixture = TestBed.createComponent(FilteringprodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
