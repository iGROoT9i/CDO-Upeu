import { TestBed } from '@angular/core/testing';

import { ArhivosService } from './arhivos.service';

describe('ArhivosService', () => {
  let service: ArhivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArhivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
