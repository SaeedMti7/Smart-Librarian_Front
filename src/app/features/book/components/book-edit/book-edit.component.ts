import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/book-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { IResultHub } from 'src/app/core/interfaces/result-hub.interface';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: IBook = { id: 0, title: '', author: '', publishYear: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }
  

  ngOnInit(): void {

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe((book: IResultHub<IBook>) => {
      if(book.content)
      {
        this.book = book.content;
      }
    });

  }

  onEdit(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

}
