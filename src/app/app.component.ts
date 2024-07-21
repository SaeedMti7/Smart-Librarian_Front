import { Component, OnInit } from '@angular/core';
import { BookService } from './features/book/services/book.service';
import { IBook } from './features/book/interfaces/book-interface';
import { IResultHub } from './core/interfaces/result-hub.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  result: IResultHub<IBook[]> = {
    isSuccess: false,
    message: '',
    content: [],
    pager: null,
    httpStatusCode: 0
  };
  
  title = 'SmartLibrarian';
  constructor(private bookService: BookService) { }

  public ngOnInit(): void {
    this.getBooks();
    }
    
  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: IResultHub<IBook[]>) => {
        if (data.content) { 
          this.result = data;
        }
        console.log(data); // لاگ کردن داده‌های دریافت شده
        console.log(this.result); // لاگ کردن this.result پس از به‌روزرسانی
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  
  

  // getBooks(): void {
  //   this.bookService.getBooks().subscribe({
  //     next: (data: IBook[]) => {
  //       this.books = data;
  //     },
  //     error: (err) => {
  //       this.errorMessage = 'Error fetching books: ' + err.message;
  //       console.error('Error fetching books:', err);
  //     }
  //   });
  // }

}
}
