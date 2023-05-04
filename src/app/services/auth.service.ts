import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(private utilService: UtilService, private router: Router) {}

  canActivate() {
    const isLogger = Boolean(this.utilService.getToken());
    if (!isLogger) {
      this.router.navigate(['login']);
    }
    return isLogger;
  }
}
