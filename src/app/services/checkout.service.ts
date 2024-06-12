import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'https://api.everrest.educata.dev/shop/cart/checkout';

  constructor(private http: HttpClient, private authService: AuthService) {}

  checkout(cartInfo: any): Observable<any> {
    const token = this.authService.getToken();
    const body = { cartInfo };
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http
      .post<any>(this.apiUrl, body, { headers, withCredentials: true })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
}
