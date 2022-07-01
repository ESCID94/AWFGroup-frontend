import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  private loginUrls: string;

  constructor(private http: HttpClient) {
    this.loginUrls = 'http://localhost:8080/AWF-app/v1/login';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.loginUrls);
  }

  public save(user: User) {
    return this.http.post<User>(this.loginUrls, user);
  }



}
