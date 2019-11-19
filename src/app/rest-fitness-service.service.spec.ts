import { TestBed } from '@angular/core/testing';

import { RestFitnessServiceService } from './rest-fitness-service.service';

describe('RestFitnessServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestFitnessServiceService = TestBed.get(RestFitnessServiceService);
    expect(service).toBeTruthy();
  });
});
