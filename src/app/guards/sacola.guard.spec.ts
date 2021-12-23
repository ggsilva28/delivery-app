import { TestBed } from '@angular/core/testing';

import { SacolaGuard } from './sacola.guard';

describe('SacolaGuard', () => {
  let guard: SacolaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SacolaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
