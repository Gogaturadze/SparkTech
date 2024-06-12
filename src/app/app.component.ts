import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ReviewComponent } from './pages/review/review.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { SeladdressComponent } from './pages/seladdress/seladdress.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './shared/components/cards/cards.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterModule,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ReviewComponent,
    CartComponent,
    ContactUsComponent,
    AboutComponent,
    SeladdressComponent,
    ShippingComponent,
    PaymentComponent,
    RegistrationComponent,
    SigninComponent,
    NotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SparkTech';
}
