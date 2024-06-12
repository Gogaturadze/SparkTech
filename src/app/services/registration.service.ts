import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  apiUrl = 'https://api.everrest.educata.dev/auth/sign_up';
  verifyUrl = 'https://api.everrest.educata.dev/auth/verify_email';

  constructor(private http: HttpClient) {}
  regUser(registrationForm: any) {
    return this.http.post(this.apiUrl, registrationForm);
  }
  verifyEmail(email: string) {
    return this.http.post(this.verifyUrl, email);
  }
}
