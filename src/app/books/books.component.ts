import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {
  pageTitle: string = 'Books';
  imageWidth: number = 80;
  imageMargin: number = 2;
  

  books=[{
    title :'',
    author:'',
    genere:'',
    imageUrl:''
  }]
  

  constructor(private router:Router,private bookService: BookService, public _auth:AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }

   editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['updatebook']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
      })
  

  }

}
