import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';
import { AccountMenuService } from '@core/services/account-menu.service';
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
	private readonly accountMenuService = inject(AccountMenuService);
	private readonly document = inject(DOCUMENT);

	isScrollOnTop = true;
	isMenuActive = false;

	get isMenuActive$(): Observable<boolean> {
		return this.navMenuService.isMenuActive$;
	}

	get isAccountMenuActive$(): Observable<boolean> {
		return this.accountMenuService.isMenuActive$;
	}

	openMenu(): void {
		this.navMenuService.openMenu();
	}

	closeMenu(): void {
		this.navMenuService.closeMenu();
	}

	toggleAccountMenu(): void {
		if (this.isMenuActive) {
			this.openAccountMenu();
			return;
		}
		this.accountMenuService.toggleMenu();
	}

	openAccountMenu(): void {
		this.accountMenuService.openMenu();
	}

	closeAccountMenu(): void {
		this.accountMenuService.closeMenu();
		this.closeMenu();
	}

	ngAfterViewInit(): void {
		this.onScroll(this.document);
		this.watchMenuState();
	}

	private watchMenuState(): void {
		this.navMenuService.isMenuActive$.pipe().subscribe({
			next: value => {
				if (value) {
					this.isMenuActive = true;
					this.accountMenuService.openMenu();
					return;
				}
				this.isMenuActive = false;
				this.accountMenuService.closeMenu();
			},
		});
	}

	@HostListener('window:resize')
	onResize(): void {
		this.navMenuService.closeMenu();
		this.accountMenuService.closeMenu();
	}

	@HostListener('window:scroll', ['$event.target'])
	onScroll(document: Document): void {
		const currentScroll = document.defaultView.scrollY;
		this.isScrollOnTop = currentScroll === 0;
	}
}
