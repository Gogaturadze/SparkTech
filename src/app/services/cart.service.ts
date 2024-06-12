import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://api.everrest.educata.dev/shop/cart';
  constructor(private http: HttpClient, private authService: AuthService) {}

  getProductFromCart(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(this.apiUrl, { headers });
  }
  getCartId(): Observable<string> {
    return this.getProductFromCart().pipe(
      map((response: { _id: any }) => response._id)
    );
  }
  //
}
