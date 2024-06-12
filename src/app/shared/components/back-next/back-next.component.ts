import { Component, Input, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-next',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './back-next.component.html',
  styleUrl: './back-next.component.scss',
})
export class BackNextComponent {
  @Input() primaryLabel: string = 'Next';
  @Input() backAddress: string = '';
  @Input() nextAddress: string = '';
  @Input() isFirstButtonHidden: boolean = true;
}
