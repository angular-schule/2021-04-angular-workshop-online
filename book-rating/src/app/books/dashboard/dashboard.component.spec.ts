import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let ratingMock: Partial<BookRatingService>;
  let storeMock: Partial<BookStoreService>;
  let book: Book;

  beforeEach(async () => {
    ratingMock = {
      rateUp: b => b
    };

    storeMock = {
      getAll: () => of([])
    };

    book = {
      isbn: '',
      title: '',
      description: '',
      price: 2,
      rating: 3
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Component Test: für fehlende Kindkomponenten keinen Fehler werfen
      providers: [
        // BRS ersetzen: immer wenn BRS angefordert wird, wird stattdessen ratingMock asgeliefert
        { provide: BookRatingService, useValue: ratingMock },
        { provide: BookStoreService, useValue: storeMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for doRateUp()', () => {
    const service = TestBed.inject(BookRatingService);

    // BRS überwachen, aber Aufruf an das originale Objekt durchleiten
    spyOn(service, 'rateUp').and.callThrough();

    component.doRateUp(book);

    expect(service.rateUp).toHaveBeenCalled();
  });
});
