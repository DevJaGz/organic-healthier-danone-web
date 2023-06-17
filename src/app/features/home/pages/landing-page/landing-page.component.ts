import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';

@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
	readonly route = CORE_ROUTE_NAME;
}
