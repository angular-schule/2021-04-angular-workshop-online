import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    
    // Buch belegen: vor detectChanges(), damit Buch vorhanden ist und keine Fehler beim Rendern auftreten
    component.book = {
      isbn: '',
      title: '',
      description: '',
      price: 2,
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event for doRateUp()', () => {
    let emittedBook: Book;

    component.rateUp.subscribe(book => {
      emittedBook = book;
    });

    component.doRateUp();

    expect(emittedBook).toBeTruthy();
    expect(emittedBook).toEqual(component.book);
  });
});
