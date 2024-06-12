import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  private shippingMethodSource = new BehaviorSubject<string>('Free');
  currentShippingMethod = this.shippingMethodSource.asObservable();

  setShippingMethod(method: string) {
    this.shippingMethodSource.next(method);
  }
}
