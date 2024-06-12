import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BestsellerService {
  apiUrl =
    'https://api.everrest.educata.dev/shop/products/search?page_size=8&rating=3&sort_by=rating';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  loadProducts(productArray: any[]): Observable<any> {
    return this.getProducts().pipe(
      map((data: any) => {
        return data.products;
      })
    );
  }
}
