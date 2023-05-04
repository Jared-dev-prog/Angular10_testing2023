import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRquest } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formLogin: FormGroup;
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private utilService: UtilService
  ) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    this.isLoading = true;
    const req = this.formLogin.value as LoginRquest;
    this.loginService.login(req).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        if (response.token) {
          this.utilService.saveToken(response.token);
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}
