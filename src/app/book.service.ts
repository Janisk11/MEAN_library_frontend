import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  item= {
    title :'',
    author:'',
    genere:'',
    imageUrl:''
  }

  constructor( private http:HttpClient) { }

  getBook(id:any){
    // return this.http.get("http://localhost:3000/books"+id);
    return this.http.get("/api/books"+id);
  }
  getBooks(){
    // return this.http.get("http://localhost:3000/books");
    return this.http.get("/api/books");
  }

  newBook(item:any){
    // return this.http.post("http://localhost:3000/insertbook",{"book":item})
    return this.http.post("/api/insertbook",{"book":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteBook(id:any)
  {

    // return this.http.delete("http://localhost:3000/removebook/"+id)
    return this.http.delete("/api/removebook/"+id)

  }
  editBook(book:any)
  {
    console.log('Book update')
    // return this.http.put("http://localhost:3000/updatebook",book)
    return this.http.put("/api/updatebook",book)
    .subscribe(data =>{console.log(data)})
  }



}

