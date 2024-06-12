import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { SigninComponent } from './pages/signin/signin.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CartComponent } from './pages/cart/cart.component';
import { SeladdressComponent } from './pages/seladdress/seladdress.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ReviewComponent } from './pages/review/review.component';
// import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productList/:categoryId', component: ProductsComponent },
  { path: 'review/:productId', component: ReviewComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'selAddress', component: SeladdressComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: '**', component: NotFoundComponent },
];
