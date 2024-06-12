import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getProduct(productId: string): Observable<any> {
    return this.http.get<any>(
      `https://api.everrest.educata.dev/shop/products/id/${productId}`
    );
  }
}
