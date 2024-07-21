import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './features/book/components/book-list/book-list.component';
import { BookEditComponent } from './features/book/components/book-edit/book-edit.component';
import { BookDetailComponent } from './features/book/components/book-detail/book-detail.component';
import { BookAddComponent } from './features/book/components/book-add/book-add.component';

const routes: Routes = [
  { path: 'books/edit/:id', component: BookEditComponent },
  { path: 'books/add', component: BookAddComponent },
  { path: 'books', component: BookListComponent },
  // { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', redirectTo: '/books' }
  // {path:'dee',component:BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
