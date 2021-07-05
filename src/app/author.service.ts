import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item= {
    author :'',
    imageUrl:'',
    about:''
  }

  constructor(private http:HttpClient) { }

  getAuthor(id:any){
    // return this.http.get("http://localhost:3000/authors"+id);
    return this.http.get("/api/authors"+id);
  }
  getAuthors(){
    return this.http.get("/api/authors");
    // return this.http.get("http://localhost:3000/authors");
  }

  newAuthor(item:any){
    // return this.http.post("http://localhost:3000/insertauthor",{"author":item})
    return this.http.post("/api/insertauthor",{"author":item})
    .subscribe(data =>{console.log(data)})
  }

  deleteAuthor(id:any)
  {

    // return this.http.delete("http://localhost:3000/removeauthor/"+id)
    return this.http.delete("/api/removeauthor/"+id)


  }
  editAuthor(author:any)
  {
    console.log('Author update')
    // return this.http.put("http://localhost:3000/updateauthor",author)
    return this.http.put("/api/updateauthor",author)
    .subscribe(data =>{console.log(data)})
  }


}
