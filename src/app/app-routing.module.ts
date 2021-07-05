import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewbookComponent } from './newbook/newbook.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'authors',
    component:AuthorsComponent
  },
  {
    path:'addbook',
    canActivate:[AuthGuard],
    component:NewbookComponent
  },
  {
    path:'addauthor',
    canActivate:[AuthGuard],
    component:NewauthorComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'updatebook',
    component:UpdateBookComponent
  },
  {
    path:'updateauthor',
    component:UpdateAuthorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
