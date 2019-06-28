import { TestBed } from '@angular/core/testing';

import { SmService } from './sm.service';

describe('SmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmService = TestBed.get(SmService);
    expect(service).toBeTruthy();
  });
});
