import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
	declarations: [ProductListPageComponent, ProductDetailPageComponent, ProductItemComponent],
	imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
