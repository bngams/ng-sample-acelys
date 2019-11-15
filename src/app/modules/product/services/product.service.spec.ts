import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Injector } from '@angular/core';
import { PRODUCTS } from '../mocks/product-data.mock';

describe('ProductService', () => {
  // let httpMock;
  let httpSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProductService]
    });

    // Angular mock
    // httpMock = Injector.create(HttpTestingController);

    // spy
    httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('should fetch products', () => {
    // const req = httpMock.expectOne('http://localhost:3004/product');
    // expect(req.request.method).toBe('GET');
    const service: ProductService = TestBed.get(ProductService);
    httpSpy.get.and.returnValue(PRODUCTS);
    service.getProducts().subscribe(
      (data) => expect(data).toEqual(PRODUCTS)
    );
  });
});
