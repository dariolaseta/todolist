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

  getData(array: any[]) {
    return this.http.get<any>(this.apiUrl).subscribe(response => {
      array = response;
      console.log(array)
    });
  }

  addItem(body: any) :void {
    this.http.post(this.apiUrl, body, {headers: this.headers}).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
