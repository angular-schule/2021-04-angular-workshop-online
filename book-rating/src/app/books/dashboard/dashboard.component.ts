import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) { }

  ngOnInit(): void {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.90,
        rating: 5
      },
      {
        isbn: '456',
        title: 'React',
        description: 'Das andere Framework',
        price: 32.90,
        rating: 3
      }
    ];
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