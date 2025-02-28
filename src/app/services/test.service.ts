import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) {
    console.log("TestService created");
   }


   loadStats(): Observable<any> {


      return this.http.get('https://api.github.com/users/ahmohil');

   }
}
