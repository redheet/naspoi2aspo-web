import { TestBed } from '@angular/core/testing';

import { BlogHelperService } from './blog-helper.service';

describe('BlogHelperService', () => {
  let service: BlogHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
