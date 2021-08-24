import { TestBed } from '@angular/core/testing';

import { TestimonialHelperService } from './testimonial-helper.service';

describe('TestimonialHelperService', () => {
  let service: TestimonialHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonialHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
