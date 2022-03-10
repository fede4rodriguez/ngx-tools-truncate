import { TestBed } from '@angular/core/testing';

import { NgxToolsTruncateService } from './ngx-tools-truncate.service';

describe('NgxToolsTruncateService', () => {
  let service: NgxToolsTruncateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxToolsTruncateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
