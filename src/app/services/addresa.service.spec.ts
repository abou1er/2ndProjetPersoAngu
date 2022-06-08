import { TestBed } from '@angular/core/testing';

import { AddresaService } from './addresa.service';

describe('AddresaService', () => {
  let service: AddresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
