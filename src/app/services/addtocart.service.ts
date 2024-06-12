import { Injectable, EventEmitter, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AuthorizationService } from './authorization.service';
import { CartComponent } from '../pages/cart/cart.component';
import { CartService } from './cart.service';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class AddtocartService {
  private apiUrl = 'https://api.everrest.educata.dev/shop/cart/product';
  productsInCart: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private cartService: CartService
  ) {}
  addToCart(productId: string, quantity: number): Observable<any> {
    const token = this.authService.getToken();
    const body = { id: productId, quantity };
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http
      .patch<any>(this.apiUrl, body, { headers, withCredentials: true })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
