import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductFormComponent, ProductListComponent, ProductCardComponent, ProductDashboardComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
