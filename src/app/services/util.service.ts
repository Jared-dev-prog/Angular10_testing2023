import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  isLogged = new Subject<boolean>();

  constructor() {}

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.isLogged.next(true);
  }

  getToken(): string | null {
    console.log('entra al metodo real');
    return localStorage.getItem('token');
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    this.isLogged.next(false);
  }
}
