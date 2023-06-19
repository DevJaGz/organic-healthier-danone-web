import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-product-item-skeleton',
	templateUrl: './product-item-skeleton.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemSkeletonComponent {}
