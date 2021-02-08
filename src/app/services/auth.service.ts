import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { Userl } from '../models/userl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiURL;
  constructor(private http:HttpClient) { }

  register(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}users`, user)
  }

  login(user:Userl):Observable<any>{
    return this.http.post(`${this.apiURL}login`, user)
  }
}
