import { AddtocartService } from '../../../services/addtocart.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReviewService } from '../../../services/review.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.scss',
})
export class AddtocartComponent {
  @Input() productId: string = '';
  constructor(private addToCartService: AddtocartService) {}

  addToCart(): void {
    this.addToCartService.addToCart(this.productId, 1).subscribe(
      (response) => {
        alert('Cart updated successfully');
        console.log(response.total.products);
      },
      (error) => {
        console.error('Failed to update cart:', error);
      }
    );
  }
}
