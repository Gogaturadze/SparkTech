import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://api.everrest.educata.dev/auth';
  private isAuthenticated = false;
  token: string = '';

  constructor(private http: HttpClient) {}

  signIn(loginObj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sign_in`, loginObj);
  }

  logOut(loginObj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sign_out`, loginObj);
  }

  login(response: any) {
    this.token = response.access_token;
    localStorage.setItem('token', this.token);
    this.signIn;
    this.isAuthenticated = true;
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    // console.log(this.isAuthenticated);
    this.logOut;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticat(): boolean {
    return !!this.getToken();
  }
}
