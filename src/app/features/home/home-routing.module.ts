import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '@features/home/pages/landing-page/landing-page.component';

export enum HOME_ROUTE_NAME {
	Blank = '',
}

const ROUTES: Routes = [
	{
		path: HOME_ROUTE_NAME.Blank,
		component: LandingPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
