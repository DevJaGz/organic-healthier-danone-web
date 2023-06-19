import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Products } from '@core/interfaces/products.interface';
import { ContentfulApiService } from '@core/services/contentful-api.service';

@Component({
	selector: 'app-product-list-page',
	templateUrl: './product-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPageComponent implements OnInit {
	private readonly contentfulApiService = inject(ContentfulApiService);
	private readonly changeDetector = inject(ChangeDetectorRef);
	products: Products = [];

	ngOnInit(): void {
		this.contentfulApiService.getProducts().subscribe({
			next: products => {
				this.products = products;
				this.changeDetector.detectChanges();
			},
		});
	}
}
