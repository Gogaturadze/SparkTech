import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { AddtocartService } from '../../services/addtocart.service';
import { AuthorizationService } from '../../services/authorization.service';
import { ProductsbyfilterService } from '../../services/productsbyfilter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardsComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../../../styles.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  currentPage: number = 1;
  pageSize: number = 12;
  currentCategory: number = 0;
  currentSortBy: string = 'rating';
  loading: boolean = false;

  constructor(
    private productService: ProductService,
    private productByFilter: ProductsbyfilterService,
    public authorizationService: AuthorizationService,
    public addtocartService: AddtocartService,
    public cartService: CartService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService
  ) {}
  //
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const categoryId = +params['categoryId'];
      this.currentCategory = categoryId;
    });
    this.loadProducts();
  }

  loadProducts(
    page: number = this.currentPage,
    pageSize: number = this.pageSize,
    category: number = this.currentCategory,
    sortBy: string = this.currentSortBy
  ): void {
    this.loading = true;
    this.productByFilter
      .loadProducts(page, pageSize, category, sortBy)
      .subscribe(
        (products: any[]) => {
          this.products = [...this.products, ...products];
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }

  byRating(): void {
    this.resetProducts();
    this.currentSortBy = 'rating';
    this.loadProducts();
  }

  byPrice(): void {
    this.resetProducts();
    this.currentSortBy = 'price';
    this.loadProducts();
  }

  byIssueDate(): void {
    this.resetProducts();
    this.currentSortBy = 'issue_date';
    this.loadProducts();
  }

  byTitle(): void {
    this.resetProducts();
    this.currentSortBy = 'title';
    this.loadProducts();
  }

  loadMore(): void {
    this.currentPage += 1;
    this.loadProducts();
  }

  resetProducts(): void {
    this.products = [];
    this.currentPage = 1;
  }

  onFilterChange(event: any): void {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'rating':
        this.byRating();
        break;
      case 'price':
        this.byPrice();
        break;
      case 'issue_date':
        this.byIssueDate();
        break;
      case 'title':
        this.byTitle();
        break;
    }
  }
  //
}
