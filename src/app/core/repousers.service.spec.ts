import { TestBed, inject } from '@angular/core/testing';

import { RepousersService } from './repousers.service';

describe('RepousersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepousersService]
    });
  });

  it('should be created', inject([RepousersService], (service: RepousersService) => {
    expect(service).toBeTruthy();
  }));
});
