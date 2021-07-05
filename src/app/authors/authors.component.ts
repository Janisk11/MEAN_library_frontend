import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'; 
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  {
  pageTitle: string = 'Authors';
  imageWidth: number = 80;
  imageMargin: number =  2;
  

  authors=[{
    author:'',
    imageUrl:'',
    about:''
  }]

  constructor(private router:Router,private authorService:AuthorService,public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }


}
