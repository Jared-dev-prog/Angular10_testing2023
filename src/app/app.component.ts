import { Component } from '@angular/core';
import { UtilService } from './services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_2023';
  isLogged = false;

  constructor(private utilService: UtilService, private router: Router) {
    this.isLogged = Boolean(this.utilService.getToken());

    this.utilService.isLogged.subscribe({
      next: (value) => {
        this.isLogged = value;
      },
    });
  }

  logout(): void {
    this.utilService.deleteToken();
    this.router.navigate(['login']);
  }
}
