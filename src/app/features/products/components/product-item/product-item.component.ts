import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {}
