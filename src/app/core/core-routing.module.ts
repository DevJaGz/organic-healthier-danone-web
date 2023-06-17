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
		children: [],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
