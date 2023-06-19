import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountPageComponent } from '@features/account/pages/user-account-page/user-account-page.component';

export enum ACCOUNT_ROUTE_NAME {
	Blank = '',
}

const ROUTES: Routes = [
	{
		path: ACCOUNT_ROUTE_NAME.Blank,
		component: UserAccountPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
