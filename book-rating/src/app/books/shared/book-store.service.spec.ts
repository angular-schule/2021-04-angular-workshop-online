import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BookStoreService } from './book-store.service';

describe('BookStoreService', () => {
  let service: BookStoreService;

  beforeEach(() => {
    // Entwurf!
    const httpStub = {
      get: url => of([]),
      post: (url, body) => of([]),
      put: url => of([])
    };


    TestBed.configureTestingModule({});
    service = TestBed.inject(BookStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
