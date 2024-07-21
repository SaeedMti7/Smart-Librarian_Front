import { Component, OnInit } from '@angular/core';
import { IBookAdd } from '../../interfaces/book-interface';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: IBookAdd = { title: '', author: '', publishYear: 0 };

  constructor(private bookService: BookService, private router: Router) { }

  onCreate(): void {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });

  }
  ngOnInit(): void {
  }

}
