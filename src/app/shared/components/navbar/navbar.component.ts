import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';
import { NavigationMenuService } from '@core/services/nav-menu.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements AfterViewInit {
	readonly route = CORE_ROUTE_NAME;
	private readonly navMenuService = inject(NavigationMenuService);
	private readonly document = inject(DOCUMENT);

	isScrollOnTop = true;

	get isMenuActive$(): Observable<boolean> {
		return this.navMenuService.isMenuActive$;
	}

	openMenu(): void {
		this.navMenuService.openMenu();
	}

	closeMenu(): void {
		this.navMenuService.closeMenu();
	}

	ngAfterViewInit(): void {
		this.onScroll(this.document);
	}

	@HostListener('window:resize')
	onResize(): void {
		this.navMenuService.closeMenu();
	}

	@HostListener('window:scroll', ['$event.target'])
	onScroll(document: Document): void {
		const currentScroll = document.defaultView.scrollY;
		this.isScrollOnTop = currentScroll === 0;
	}
}
