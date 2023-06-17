import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	readonly route = CORE_ROUTE_NAME;
}
