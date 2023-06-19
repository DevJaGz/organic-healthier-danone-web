import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ContentfulApiService } from '@core/services/contentful-api.service';

@Component({
	selector: 'app-product-list-page',
	templateUrl: './product-list-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListPageComponent implements OnInit {
	private readonly contentfulApiService = inject(ContentfulApiService);
	products: any[] = new Array(10).fill({});

	ngOnInit(): void {
		this.contentfulApiService.getProducts().subscribe({
			next: products => {
				console.log(products);
			},
		});
	}
}
