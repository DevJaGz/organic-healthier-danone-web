import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '@core/interfaces/products.interface';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
	@Input()
	product: IProduct;

	get title(): string {
		return this.product.title;
	}

	get description(): string {
		return this.product.description;
	}

	get image(): string {
		return this.product.image.url;
	}

	get id(): string {
		return this.product.id;
	}
}
