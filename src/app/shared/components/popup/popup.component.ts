import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent {
  constructor(private router: Router) {}
  @Input() message: string = '';
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
    this.router.navigate(['/']);
  }
}
