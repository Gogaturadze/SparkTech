import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsbyfilterService {
  apiUrl = 'https://api.everrest.educata.dev/shop/products/search';

  constructor(private http: HttpClient) {}

  getProducts(
    pageIndex: number,
    pageSize: number,
    categoryId: number,
    sortBy: string
  ): Observable<any> {
    const url = `${this.apiUrl}?page_index=${pageIndex}&page_size=${pageSize}&category_id=${categoryId}&sort_by=${sortBy}&sort_direction=asc`;
    return this.http.get(url);
  }

  loadProducts(
    pageIndex: number,
    pageSize: number,
    categoryId: number,
    sortBy: string
  ): Observable<any> {
    return this.getProducts(pageIndex, pageSize, categoryId, sortBy).pipe(
      map((data: any) => {
        return data.products;
      })
    );
  }
  //
  private categoryIdSource = new BehaviorSubject<number>(2);
  currentCategoryId = this.categoryIdSource.asObservable();
  changeCategoryId(id: number) {
    this.categoryIdSource.next(id);
  }
}
