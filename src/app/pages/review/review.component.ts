import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { ShopbuttonComponent } from '../../shared/components/shopbutton/shopbutton.component';
import { AddtocartComponent } from '../../shared/components/addtocart/addtocart.component';
import { ReviewService } from '../../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ShopbuttonComponent,
    AddtocartComponent,
    CommonModule,
  ],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss', '../../../styles.scss'],
})
export class ReviewComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private reviewService: ReviewService
  ) {}
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId &&
      this.reviewService.getProduct(productId).subscribe((result) => {
        this.productDetail = result;
        // console.log(this.productDetail);
      });
  }
  productDetail: any;
}
