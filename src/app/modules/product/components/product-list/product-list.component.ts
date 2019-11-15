import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = PRODUCTS;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.testObservable();
    this.productService.getProducts();
  }

}
