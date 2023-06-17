import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailPageComponent } from '@features/products/pages/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from '@features/products/pages/product-list-page/product-list-page.component';

export enum PRODUCTS_ROUTE_NAME {
	Blank = '',
	Product = ':productId',
}

const ROUTES: Routes = [
	{
		path: PRODUCTS_ROUTE_NAME.Blank,
		component: ProductListPageComponent,
		pathMatch: 'full',
	},
	{
		path: PRODUCTS_ROUTE_NAME.Product,
		component: ProductDetailPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class ProductsRoutingModule {}
