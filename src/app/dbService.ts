import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  
  public pyUrl = "http://localhost:3000/";
  
  constructor(private http: HttpClient) { }

  public authenticate(data): Observable<any>{
      return this.http.post(this.pyUrl + 'authenticate', data)
  }
}