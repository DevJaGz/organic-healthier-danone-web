import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemSkeletonComponent } from './components/product-item-skeleton/product-item-skeleton.component';
import { ProductDetailSkeletonComponent } from './components/product-detail-skeleton/product-detail-skeleton.component';

@NgModule({
	declarations: [ProductListPageComponent, ProductDetailPageComponent, ProductItemComponent, ProductItemSkeletonComponent, ProductDetailSkeletonComponent],
	imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
