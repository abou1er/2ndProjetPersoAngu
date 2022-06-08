import { TestBed } from '@angular/core/testing';

import { GestionResaService } from './gestion-resa.service';

describe('GestionResaService', () => {
  let service: GestionResaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionResaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
