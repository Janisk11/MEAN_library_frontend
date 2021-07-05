import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  title:String ="Add Author";
  constructor(private authorService:AuthorService, private router:Router) { }
  authorItem= {
    author:'',
    imageUrl:'',
    about:''
  }
  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(["/authors"])
  }

}
