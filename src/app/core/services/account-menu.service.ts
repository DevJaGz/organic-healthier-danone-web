import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountMenuService {
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

	toggleMenu(): void {
		this.updateMenuState(!this.isMenuActive);
	}

	private updateMenuState(value: boolean): void {
		this._isMenuActive$.next(value);
	}
}
