import { Component } from '@angular/core';
import { ShopbuttonComponent } from '../shopbutton/shopbutton.component';

@Component({
  selector: 'app-banners',
  standalone: true,
  imports: [ShopbuttonComponent],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss',
})
export class BannersComponent {}
