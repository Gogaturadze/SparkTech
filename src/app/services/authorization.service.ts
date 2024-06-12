import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private authUrl = 'https://api.everrest.educata.dev/auth';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAuth(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.authUrl, { headers });
  }
  getId(): Observable<string> {
    return this.getAuth().pipe(
      map((authResponse: { _id: any }) => authResponse._id)
    );
  }
}
