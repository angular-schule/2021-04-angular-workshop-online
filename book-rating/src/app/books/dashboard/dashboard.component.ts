import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { loadBooks } from '../store/book.actions';
import { selectBooks } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];
  
  constructor(private rs: BookRatingService, private store: Store) { }

  ngOnInit(): void {
    /*this.bs.getAll()
      .subscribe(books => this.books = books);*/
    this.store.dispatch(loadBooks());

    // this.store.pipe(map(state => selectBooks(state)))
    const books$ = this.store.pipe(select(selectBooks));
    books$.subscribe(books => this.books = books);
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b);
  }
  
  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b);
  }

}