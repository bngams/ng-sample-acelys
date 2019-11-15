import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../../mocks/product-data.mock';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  private productsDataSource: BehaviorSubject<Product[]> = new BehaviorSubject(new Array());
  products$: Observable<Product[]>;
  productsFromSubject$ = this.productsDataSource.asObservable();


  constructor(private productService: ProductService) { }

  ngOnInit() {
    // via MOCK
    // this.products = PRODUCTS;

    // call request and populate on subscribe
    this.productService.getProducts().subscribe(
      (data) => {
        // init de products
        this.products = data;
        // init behaviour subject
        this.productsDataSource.next(data);
      }

    );

    // async
    this.products$ = this.productService.getProducts();
  }

  addProductToDatasource(product: Product) {
    // get current array value, add entry on it
    this.productsDataSource.getValue().push(product);
  }

}
