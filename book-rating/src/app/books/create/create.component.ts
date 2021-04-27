import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private bs: BookStoreService) { }

  ngOnInit(): void {
  }

  createBook(book: Book): void {
    this.bs.create(book).subscribe(b => {
      this.router.navigate(['/books', b.isbn]);
    });
  }

}
