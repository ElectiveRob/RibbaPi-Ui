import { TestBed, inject } from '@angular/core/testing';

import { BoardSettingsService } from './board-settings.service';

describe('BoardSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardSettingsService]
    });
  });

  it('should be created', inject([BoardSettingsService], (service: BoardSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
