import { TestBed, inject } from '@angular/core/testing';

import { UowarticleService } from './uowarticle.service';

describe('UowarticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UowarticleService]
    });
  });

  it('should be created', inject([UowarticleService], (service: UowarticleService) => {
    expect(service).toBeTruthy();
  }));
});
