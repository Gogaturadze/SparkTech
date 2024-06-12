import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchingService {
  private apiUrl = 'https://api.everrest.educata.dev/shop/products/search';

  constructor(private http: HttpClient) {}

  searchProducts(keywords: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?keywords=${keywords}`);
  }
}
