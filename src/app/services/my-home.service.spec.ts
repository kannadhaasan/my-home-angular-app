import { TestBed } from '@angular/core/testing';

import { MyHomeService } from './my-home.service';

describe('MyHomeService', () => {
  let service: MyHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
