import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook } from '../../interfaces/book-interface';
import { IResultHub } from 'src/app/core/interfaces/result-hub.interface';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  colDefs1: ColDef[] = [
    { headerName: '#', field: 'index', valueGetter: 'node.rowIndex + 1', width: 50 },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Author', field: 'author' },
    { headerName: 'Publish Year', field: 'publishYear' },
    { headerName: 'Operation', field: 'operation', cellRenderer: this.operationCellRenderer }
  ];
  operationCellRenderer(params:any) {
    return `<button (click)="onEdit(${params.data.id})" type="button" class="btn btn-warning">Edit</button> || 
            <button (click)="onDelete(${params.data.id})" type="button" class="btn btn-danger">Delete</button>`;
  }

  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ];

  result: IResultHub<IBook[]> = {
    isSuccess: false,
    message: '',
    content: [],
    pager: null,
    httpStatusCode: 0
  };
  public ngOnInit(): void {
    this.getBooks();
  }
  constructor(private bookService: BookService,private router:Router) { }

  getBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data: IResultHub<IBook[]>) => {
        if (data.content) {
          this.result = data;
        }
        console.log(data); 
        console.log(this.result); 
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      }
    });
  }


  onEdit(bookId: number): void {
    this.router.navigate(['/books/edit', bookId]);
  }

  
}
