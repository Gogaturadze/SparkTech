import { Component, OnInit } from '@angular/core';
import { ShopbuttonComponent } from '../../shared/components/shopbutton/shopbutton.component';
import { SmallbannersComponent } from '../../shared/components/smallbanners/smallbanners.component';
import { CategoryComponent } from '../../shared/components/category/category.component';
import { BestsellerComponent } from '../../shared/components/bestseller/bestseller.component';
import { BannersComponent } from '../../shared/components/banners/banners.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { AddtocartService } from '../../services/addtocart.service';
import { AuthorizationService } from '../../services/authorization.service';
import { log } from 'console';
import { CartService } from '../../services/cart.service';
import { BestsellerService } from '../../services/bestseller.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ShopbuttonComponent,
    SmallbannersComponent,
    CategoryComponent,
    CardsComponent,
    BestsellerComponent,
    BannersComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../../styles.scss'],
})
export class HomeComponent implements OnInit {
  bestSeller: any[] = [];
  discount: any[] = [];
  userId: string = '';
  cartId: string = '';

  constructor(
    private productService: ProductService,
    private bestSellerService: BestsellerService,
    public AuthorizationService: AuthorizationService,
    public AddtocartService: AddtocartService,
    public cartService: CartService,
    private http: HttpClient
  ) {}

  //
  // loadProducts(): void {
  //   this.productService.getProducts().subscribe((data: any) => {
  //     this.bestSeller = data.products;
  //   });
  //   this.productService.getProducts().subscribe((data: any) => {
  //     this.discount = data.products;
  //   });
  // }

  //

  ngOnInit(): void {
    // this.loadProducts();
    this.bestSellerService
      .loadProducts(this.bestSeller)
      .subscribe((products: any[]) => {
        this.bestSeller = products;
      });
    // console.log(this.bestSeller);

    this.productService
      .loadProducts(this.discount)
      .subscribe((products: any[]) => {
        this.discount = products;
      });
    //
    // this.AuthorizationService.getAuth().subscribe((authResponse) => {});
    //
    // this.AuthorizationService.getId().subscribe((userId) => {
    //   this.userId = userId;
    //   console.log(this.userId);
    // });
    //
    //comented
    // this.cartService.getCartId().subscribe((cartId) => {
    //   this.cartId = cartId;
    //   console.log(this.cartId);
    // });
  }

  //
}
