import { TestBed } from '@angular/core/testing';

import { ScrollSpyService } from './scroll-spy.service';

describe('ScrollSpyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollSpyService = TestBed.get(ScrollSpyService);
    expect(service).toBeTruthy();
  });
});
