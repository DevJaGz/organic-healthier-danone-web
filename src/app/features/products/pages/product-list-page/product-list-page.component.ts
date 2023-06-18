import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-product-list-page',
	templateUrl: './product-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPageComponent {
	products: any[] = new Array(10).fill({});
}
