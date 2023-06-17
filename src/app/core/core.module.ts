import { CommonModule } from '@angular/common';
import { NgModule, inject } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
	declarations: [
    CorePageComponent
  ],
	imports: [CommonModule, CoreRoutingModule, SharedModule],
	exports: [CoreRoutingModule],
})
export class CoreModule {
	private parentModule = inject(CoreModule, {
		optional: true,
		skipSelf: true,
	});

	constructor() {
		if (this.parentModule) {
			throw new Error('CoreModule is already loaded. Import available only in AppModule');
		}
	}
}
