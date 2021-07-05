import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
title:String ="Add Book";
  constructor(private bookService:BookService, private router:Router){  } 
  bookItem= {
     title:'',
     author:'',
     genere:'',
     imageUrl:''}

  ngOnInit() {
  }
  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(["/books"])
  }
  

}
