import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkoutsteps',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkoutsteps.component.html',
  styleUrl: './checkoutsteps.component.scss',
})
export class CheckoutstepsComponent {
  @Input() step1: 'active-step' | 'non-active' = 'active-step';
  @Input() step2: 'active-step' | 'non-active' = 'active-step';
  @Input() step3: 'active-step' | 'non-active' = 'active-step';
}
