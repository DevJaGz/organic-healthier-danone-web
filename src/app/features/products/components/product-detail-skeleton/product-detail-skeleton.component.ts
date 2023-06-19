import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-product-detail-skeleton',
	templateUrl: './product-detail-skeleton.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailSkeletonComponent {}
