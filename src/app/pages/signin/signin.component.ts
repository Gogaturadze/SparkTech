import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../shared/components/popup/popup.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule, PopupComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  loginObj: any = {
    email: '',
    password: '',
  };
  isLoggedIn: boolean = false;
  loginMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.signIn(this.loginObj).subscribe((res: any) => {
      if (res.access_token) {
        this.authService.login(res);
        this.isLoggedIn = true;
        this.loginMessage = 'Login successful!';
      }
    });
  }
}
