import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
	declarations: [LandingPageComponent],
	imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
