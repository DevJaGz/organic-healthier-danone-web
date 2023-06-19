import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';
import { NavigationMenuService } from '@core/services/nav-menu.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
	readonly route = CORE_ROUTE_NAME;
	private readonly navMenuService = inject(NavigationMenuService);

	get isMenuActive$(): Observable<boolean> {
		return this.navMenuService.isMenuActive$;
	}

	openMenu(): void {
		this.navMenuService.openMenu();
	}

	closeMenu(): void {
		this.navMenuService.closeMenu();
	}

	@HostListener('window:resize')
	onResize(): void {
		console.log('Close by resize');

		this.navMenuService.closeMenu();
	}
}
