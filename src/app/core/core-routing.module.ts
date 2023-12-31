import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from '@core/pages/core-page/core-page.component';

export enum CORE_ROUTE_NAME {
	Blank = '',
	Calories = 'calorias',
	Products = 'productos',
	Account = 'cuenta',
}

const ROUTES: Routes = [
	{
		path: CORE_ROUTE_NAME.Blank,
		component: CorePageComponent,
		children: [
			{
				path: CORE_ROUTE_NAME.Blank,
				loadChildren: () => import('@features/home/home.module').then(m => m.HomeModule),
			},
			{
				path: CORE_ROUTE_NAME.Products,
				loadChildren: () => import('@features/products/products.module').then(m => m.ProductsModule),
			},
			{
				path: CORE_ROUTE_NAME.Calories,
				loadChildren: () => import('@features/calories/calories.module').then(m => m.CaloriesModule),
			},
			{
				path: CORE_ROUTE_NAME.Account,
				loadChildren: () => import('@features/account/account.module').then(m => m.AccountModule),
			},
		],
	},
	{
		path: '**',
		redirectTo: CORE_ROUTE_NAME.Blank,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
