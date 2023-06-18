import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';

@Component({
	selector: 'app-product-detail-page',
	templateUrl: './product-detail-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent {
	readonly route = CORE_ROUTE_NAME;
}
