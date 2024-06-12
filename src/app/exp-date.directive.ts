import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appExpDate]',
  standalone: true,
})
export class ExpDateDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    let input = this.el.value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (input.length > 2) {
      input = input.substring(0, 2) + '/' + input.substring(2, 6);
    }

    if (input.length > 7) {
      input = input.substring(0, 7); // Limit to 7 characters
    }

    this.el.value = input;
  }
}
