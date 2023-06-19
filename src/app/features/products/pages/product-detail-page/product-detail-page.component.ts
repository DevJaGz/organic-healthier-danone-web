import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CORE_ROUTE_NAME } from '@core/core-routing.module';
import { IProduct } from '@core/interfaces/products.interface';
import { ContentfulApiService } from '@core/services/contentful-api.service';

@Component({
	selector: 'app-product-detail-page',
	templateUrl: './product-detail-page.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPageComponent implements OnInit {
	readonly route = CORE_ROUTE_NAME;

	private readonly contentfulApiService = inject(ContentfulApiService);
	private readonly changeDetector = inject(ChangeDetectorRef);
	private readonly activatedRoute = inject(ActivatedRoute);

	isLoaded = false;

	product: IProduct = {} as IProduct;

	get title(): string {
		return this.product.title;
	}

	get description(): string {
		return this.product.description;
	}

	get image(): string {
		return this.product.image?.url;
	}

	get ingredients(): string {
		return this.product.ingredients;
	}

	get productData(): string {
		return this.product.productData;
	}

	get ean(): string {
		return this.product.ean;
	}

	ngOnInit(): void {
		const id = this.activatedRoute.snapshot.paramMap.get('productId');
		this.contentfulApiService.getProduct(id).subscribe({
			next: product => {
				this.isLoaded = true;
				this.product = product;
				this.changeDetector.detectChanges();
			},
		});
	}
}
