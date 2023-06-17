import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaloriesConfigurationPageComponent } from '@features/calories/pages/calories-configuration-page/calories-configuration-page.component';

export enum CALORIES_ROUTES_NAME {
	Blank = '',
}

const ROUTES: Routes = [
	{
		path: CALORIES_ROUTES_NAME.Blank,
		component: CaloriesConfigurationPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class CaloriesRoutingModule {}
