import { TestBed, inject } from '@angular/core/testing';

import { RepoarticlesService } from './repoarticles.service';

describe('RepoarticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoarticlesService]
    });
  });

  it('should be created', inject([RepoarticlesService], (service: RepoarticlesService) => {
    expect(service).toBeTruthy();
  }));
});
