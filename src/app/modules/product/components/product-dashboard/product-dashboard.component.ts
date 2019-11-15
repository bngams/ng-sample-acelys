import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild('mainTitle', { read: ElementRef, static: false })
  mainTitle: ElementRef;

  @ViewChild(ProductListComponent, { static: false })
  productListComponent: ProductListComponent;

  @ViewChild(ProductListComponent, { read: ElementRef, static: false })
  productListRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addProductToList(product: Product) {
    console.log(product);
    // this.productListComponent.products.push(product);
    // add to behavioursubject datasource
    this.productListComponent.addProductToDatasource(product);
  }

}
