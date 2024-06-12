import { Component } from '@angular/core';
import { ShopbuttonComponent } from '../shopbutton/shopbutton.component';

@Component({
  selector: 'app-smallbanners',
  standalone: true,
  imports: [ShopbuttonComponent],
  templateUrl: './smallbanners.component.html',
  styleUrl: './smallbanners.component.scss',
})
export class SmallbannersComponent {}
