import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { ProductsModule } from '../pages/products/products.module';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://api.everrest.educata.dev/shop/products/all?page_index=1';

  constructor(private http: HttpClient) {}
  // getProducts(pageSize: number) {
  //   const url = `${this.apiUrl}&page_size=${pageSize}`;
  //   return this.http.get(url);
  // }

  getProducts() {
    const url = `${this.apiUrl}&page_size=${8}`;
    return this.http.get(url);
  }

  loadProducts(productArray: any[]): Observable<any> {
    return this.getProducts().pipe(
      map((data: any) => {
        return data.products; // Assuming 'products' is the array of products in the response
      })
    );
  }
  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
}
