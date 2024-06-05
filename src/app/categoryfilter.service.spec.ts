import { TestBed } from '@angular/core/testing';

import { CategoryfilterService } from './categoryfilter.service';

describe('CategoryfilterService', () => {
  let service: CategoryfilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryfilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
