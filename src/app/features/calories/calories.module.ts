import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CaloriesRoutingModule } from './calories-routing.module';
import { CaloriesConfigurationPageComponent } from './pages/calories-configuration-page/calories-configuration-page.component';

@NgModule({
	declarations: [CaloriesConfigurationPageComponent],
	imports: [CommonModule, CaloriesRoutingModule, SharedModule],
})
export class CaloriesModule {}
