import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook, IBookAdd, IBookEdit } from '../interfaces/book-interface';
import { HttpClient } from '@angular/common/http';
import { IResultHub } from 'src/app/core/interfaces/result-hub.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:5080/api/Book';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IResultHub<IBook[]>> {
    return this.http.get<IResultHub<IBook[]>>(this.apiUrl);
  }

  getBook(id: number): Observable<IResultHub<IBook>> {
    return this.http.get<IResultHub<IBook>>(`${this.apiUrl}/${id}`);
  }

  createBook(book: IBookAdd): Observable<IResultHub<IBook>> {
    return this.http.post<IResultHub<IBook>>(this.apiUrl, book);
  }

  updateBook(id: number, book: IBookEdit): Observable<IResultHub<IBook>> {
    return this.http.put<IResultHub<IBook>>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
