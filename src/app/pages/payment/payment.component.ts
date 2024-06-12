import { Component, NgModule, OnInit } from '@angular/core';
import { BackNextComponent } from '../../shared/components/back-next/back-next.component';
import { CheckoutstepsComponent } from '../../shared/components/checkoutsteps/checkoutsteps.component';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from '../../services/authorization.service';
import { ShippingService } from '../../services/shipping.service';
import { CheckoutService } from '../../services/checkout.service';
import { FormsModule } from '@angular/forms';
import { ExpDateDirective } from '../../exp-date.directive';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    BackNextComponent,
    CheckoutstepsComponent,
    CommonModule,
    FormsModule,
    ExpDateDirective,
    RouterLink,
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss', '../../../styles.scss'],
})
export class PaymentComponent implements OnInit {
  productsInCart: any[] = [];
  products: any[] = [];

  subTotal: number = 0;
  total: number = 0;
  tax: number = 0;

  shippingMethod: string = '';
  stringToNumber: number = 0;
  shipConvertor(shippingMethod: any) {
    if (shippingMethod == 8.5) {
      this.stringToNumber = parseFloat(shippingMethod);
      // console.log(this.stringToNumber);
    } else {
      this.stringToNumber = 0;
    }
  }

  userInfo: any[] = [];
  userAddress: string = '';
  constructor(
    private authorizationService: AuthorizationService,
    private authService: AuthService,
    private http: HttpClient,
    private productService: ProductService,
    private cartService: CartService,
    private shippingService: ShippingService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService
      .loadProducts(this.products)
      .subscribe((products: any[]) => {
        this.products = products;
      });
    this.loadCartProducts();
    this.getUserInfo();
    this.shippingService.currentShippingMethod.subscribe(
      (method) => (this.shippingMethod = method)
    );
    this.shipConvertor(this.shippingMethod);
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
    this.total = this.subTotal + this.tax + this.stringToNumber;
  }
  //
  getUserInfo() {
    this.authorizationService.getAuth().subscribe((userdata) => {
      this.userInfo = [userdata.address, userdata.zipcode, userdata.phone];
    });
  }
  //

  cardNumber: string = '';
  expDate: string = '';
  cvv: string = '';
  private _cardholderName: string = '';

  get cardholderName(): string {
    return this._cardholderName;
  }

  set cardholderName(value: string) {
    this._cardholderName = value.toUpperCase();
  }

  //
  validateForm(): boolean {
    return (
      this.validateCardholderName() &&
      this.validateCardNumber() &&
      this.validateExpDate() &&
      this.validateCVV()
    );
  }

  validateCardholderName(): boolean {
    if (this.cardholderName.trim() === '') {
      alert('Please enter the cardholder name.');
      return false;
    }
    return true;
  }

  validateCardNumber(): boolean {
    let cardNumber = this.cardNumber.replace(/\s+/g, '').replace(/-/g, '');
    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Please enter a valid 16-digit card number.');
      return false;
    }
    return true;
  }

  validateExpDate(): boolean {
    if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(this.expDate)) {
      alert('Please enter the expiration date in MM/YYYY format.');
      return false;
    }
    return true;
  }

  validateCVV(): boolean {
    if (!/^\d{3,4}$/.test(this.cvv)) {
      alert('Please enter a valid CVV.');
      return false;
    }
    return true;
  }

  onCheckout(): void {
    if (this.validateForm()) {
      const creditCardInfo = {
        cardholderName: this.cardholderName,
        cardNumber: this.cardNumber,
        expDate: this.expDate,
        cvv: this.cvv,
      };

      this.checkoutService.checkout(creditCardInfo).subscribe(
        (response) => {
          alert('Checkout successful');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Checkout failed:', error);
        }
      );
    } else {
      console.log('Checkout aborted due to validation errors.');
    }
  }
}
