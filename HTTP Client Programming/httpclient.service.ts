import { Injectable } from '@angular/core';
// import httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  //Invoke HttpClient as Dependecny Injection
  constructor(private http:HttpClient) {}

  getUsersfromServer(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
