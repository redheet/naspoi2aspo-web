import { TestBed } from '@angular/core/testing';

import { ServiceHelperService } from './service-helper.service';

describe('ServiceHelperService', () => {
  let service: ServiceHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
