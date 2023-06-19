import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';

@NgModule({
	declarations: [UserAccountPageComponent],
	imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
