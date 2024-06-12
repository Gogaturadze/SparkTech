import { TestBed } from '@angular/core/testing';

import { ServicestokenService } from './servicestoken.service';

describe('ServicestokenService', () => {
  let service: ServicestokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicestokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
