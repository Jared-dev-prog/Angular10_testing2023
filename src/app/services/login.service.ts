import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse, LoginRquest } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(req: LoginRquest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('https://reqres.in/api/register', req);
  }
}
