import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-shopbutton',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopbutton.component.html',
  styleUrl: './shopbutton.component.scss',
})
export class ShopbuttonComponent {
  @Input() backgroundColorType: 'type1' | 'type2' = 'type1';
}
