import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaloriesRoutingModule } from './calories-routing.module';
import { CaloriesConfigurationPageComponent } from './pages/calories-configuration-page/calories-configuration-page.component';

@NgModule({
	declarations: [CaloriesConfigurationPageComponent],
	imports: [CommonModule, CaloriesRoutingModule],
})
export class CaloriesModule {}
