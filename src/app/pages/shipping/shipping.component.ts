import { Component } from '@angular/core';
import { BackNextComponent } from '../../shared/components/back-next/back-next.component';
import { CheckoutstepsComponent } from '../../shared/components/checkoutsteps/checkoutsteps.component';
import { ShippingService } from '../../services/shipping.service';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [BackNextComponent, CheckoutstepsComponent],
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss', '../../../styles.scss'],
})
export class ShippingComponent {
  constructor(private shippingService: ShippingService) {}
  onMethodChange(method: string) {
    this.shippingService.setShippingMethod(method);
  }
}
