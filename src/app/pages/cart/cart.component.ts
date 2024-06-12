import { Component, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { log } from 'console';
import { DeleteCartService } from '../../services/delete-cart.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss', '../../../styles.scss'],
})
export class CartComponent implements OnInit {
  productsInCart: any[] = [];
  products: any[] = [];
  //
  subTotal: number = 0;
  total: number = 0;
  tax: number = 0;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private cartService: CartService,
    private productService: ProductService,
    private deleteCartService: DeleteCartService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.productService
        .loadProducts(this.products)
        .subscribe((products: any[]) => {
          this.products = products;
        });
      this.loadCartProducts();
    }
  }

  loadCartProducts() {
    this.cartService.getProductFromCart().subscribe(
      (response) => {
        this.productsInCart = response.products;
        this.updateProductsInCart();
      },
      (error) => {
        console.error('Error loading cart products:', error);
      }
    );
  }

  ///
  updateProductsInCart() {
    this.productsInCart.forEach((cartProduct) => {
      //
      this.subTotal += cartProduct.pricePerQuantity;
      //
      const productToUpdate = this.products.find(
        (product) => product._id === cartProduct.productId
      );

      if (productToUpdate) {
        cartProduct.title = productToUpdate.title;
        cartProduct.images = productToUpdate.images[0];
      }
    });

    this.tax = (this.subTotal * 10) / 100;
    this.total = this.subTotal + this.tax;
  }

  //delete

  deleteFromCart(productId: string): void {
    this.deleteCartService.deleteFromCart(productId).subscribe(
      (response) => {
        console.log('item deleted:', response);
      },
      (error) => {
        console.error('Failed to update cart:', error);
      }
    );
  }
}
