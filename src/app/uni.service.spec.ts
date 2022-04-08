import { TestBed } from '@angular/core/testing';

import { UniService } from './uni.service';

describe('UniService', () => {
  let service: UniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
