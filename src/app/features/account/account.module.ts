import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { UserAccountPageComponent } from './pages/user-account-page/user-account-page.component';


@NgModule({
  declarations: [
    UserAccountPageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
