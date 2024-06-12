import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class DeleteCartService {
  private apiUrl = 'https://api.everrest.educata.dev/shop/cart/product';

  constructor(
    private http: HttpClient,
    public cartService: CartService,
    private authService: AuthService
  ) {}

  deleteFromCart(productId: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { id: productId };
    console.log(body);

    return this.http
      .request<any>('delete', this.apiUrl, { headers, body })
      .pipe(
        catchError(this.handleError),
        tap(() => {
          window.location.reload();
        })
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
