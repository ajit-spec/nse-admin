import { TestBed } from '@angular/core/testing';

import { UsersDataServiceService } from './users-data-service.service';

describe('UsersDataServiceService', () => {
  let service: UsersDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
