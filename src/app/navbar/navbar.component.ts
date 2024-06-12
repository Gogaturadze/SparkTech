import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { SearchingService } from '../services/searching.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { AddtocartService } from '../services/addtocart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../styles.scss'],
})
export class NavbarComponent implements OnInit {
  numberOfProducts: number = 0;

  isDropdownOpen = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private searchingService: SearchingService,
    private productService: ProductService,
    private cartService: CartService,
    private addTocartService: AddtocartService
  ) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loadCartProducts();
    } else {
    }
  }
  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // logout() {
  //   this.authService.logout();
  //   this.isDropdownOpen = false;
  // }

  // navigateTo(route: string) {
  //   this.router.navigate([route]);
  //   this.isDropdownOpen = false;
  // }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.isDropdownOpen = false;
    this.router.navigate(['/']);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isDropdownOpen = false;
  }
  //searching
  searchQuery: string = '';
  searchResults: any[] = [];
  loading: boolean = false;

  search(): void {
    if (this.searchQuery.trim() !== '') {
      this.loading = true;
      this.searchingService.searchProducts(this.searchQuery).subscribe(
        (data: any) => {
          this.searchResults = data.products;
          console.log(this.searchResults);
          this.loading = false;
        },
        (error: any) => {
          console.error('Error fetching products:', error);
          this.loading = false;
        }
      );
    }
  }
  //
  loadCartProducts() {
    this.cartService.getProductFromCart().subscribe(
      (response) => {
        this.numberOfProducts = response.products.length;
      },
      (error) => {
        console.error('Error loading cart products:', error);
      }
    );
  }
}
