import { TestBed } from '@angular/core/testing';

import { ServiceproductsService } from './serviceproducts.service';

describe('ServiceproductsService', () => {
  let service: ServiceproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
