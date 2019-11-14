import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  // <app-product-card [product]="p"> ...
  @Input()
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
