import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'http://localhost:3000/posts';

  constructor(
    private http: HttpClient,
    ) { }

  getData() {
    
  }
}
