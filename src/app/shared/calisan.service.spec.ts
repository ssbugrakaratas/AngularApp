import { TestBed } from '@angular/core/testing';

import { CalisanService } from './calisan.service';

describe('CalisanService', () => {
  let service: CalisanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalisanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
