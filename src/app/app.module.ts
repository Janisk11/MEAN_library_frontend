import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { HeaderComponent } from './header/header.component';
import { NewbookComponent } from './newbook/newbook.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { AuthService } from './auth.service';
import { BookService } from './book.service';
import { AuthorService } from './author.service'; 
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BooksComponent,
    AuthorsComponent,
    HeaderComponent,
    NewbookComponent,
    NewauthorComponent,
    LoginComponent,
    UpdateBookComponent,
    UpdateAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService,BookService,AuthorService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
