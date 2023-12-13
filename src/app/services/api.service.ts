import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/posts/';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    ) { }

  getData() {
    return this.http.get<any>(this.apiUrl);
  }

  addItem(body: any) {
    return this.http.post(this.apiUrl, body, {headers: this.headers});
  }

  deleteCharacter(id: number) :void {
    this.http.delete(this.apiUrl + id, {headers: this.headers}).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  checked(body: any, id: number){
    this.http.patch(this.apiUrl + id, body, {headers: this.headers}).subscribe(response => {
      console.log(response);
    })
  }
}
