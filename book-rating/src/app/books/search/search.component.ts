import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;
  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');

    this.results$ = this.searchControl.valueChanges.pipe(
      filter((e: string) => e.length >= 3),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    );
  }

  /*
  - Bug, wenn leerer Suchbegriff
  - Ladeanzeige
  - Anzeige, dass keine Ergebnisse vorhanden
  */

}
