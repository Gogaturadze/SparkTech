import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsbyfilterService } from '../../../services/productsbyfilter.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss', '../../../../styles.scss'],
})
export class CategoryComponent {}
