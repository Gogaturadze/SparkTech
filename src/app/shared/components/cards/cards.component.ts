import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddtocartService } from '../../../services/addtocart.service';
import { ReviewService } from '../../../services/review.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss', '../../../../styles.scss'],
})
export class CardsComponent {
  @Input() productName: string = '';
  @Input() productPrice: any;
  @Input() productBeforePrice: any;
  @Input() productImages: string = '';
  @Input() productId: string = '';

  constructor(
    private addToCartService: AddtocartService,
    private reviewService: ReviewService,
    private cartService: CartService
  ) {}

  addToCart(): void {
    this.addToCartService.addToCart(this.productId, 1).subscribe(
      (response) => {
        alert('Cart updated successfully');
      },
      (error) => {
        alert('Failed to update cart');
      }
    );
  }
  //
}
