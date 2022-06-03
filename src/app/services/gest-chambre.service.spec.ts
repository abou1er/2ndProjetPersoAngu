import { TestBed } from '@angular/core/testing';

import { GestChambreService } from './gest-chambre.service';

describe('GestChambreService', () => {
  let service: GestChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
