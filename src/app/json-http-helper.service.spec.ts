import { TestBed, inject } from '@angular/core/testing';

import { JsonHttpHelperService } from './json-http-helper.service';

describe('JsonHttpHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonHttpHelperService]
    });
  });

  it('should be created', inject([JsonHttpHelperService], (service: JsonHttpHelperService) => {
    expect(service).toBeTruthy();
  }));
});
