import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationMenuService {
	private readonly _isMenuActive$ = new BehaviorSubject<boolean>(false);

	get isMenuActive(): boolean {
		return this._isMenuActive$.value;
	}

	get isMenuActive$(): Observable<boolean> {
		return this._isMenuActive$.asObservable();
	}

	openMenu(): void {
		this.updateMenuState(true);
	}

	closeMenu(): void {
		this.updateMenuState(false);
	}

	private updateMenuState(value: boolean): void {
		this._isMenuActive$.next(value);
	}
}
