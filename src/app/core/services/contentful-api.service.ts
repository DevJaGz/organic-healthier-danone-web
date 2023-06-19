import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct, Products } from '@core/interfaces/products.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export type ContentfulCollection<T = any> = {
	data: {
		[s: string]: {
			items: T;
		};
	};
};

export type ContentfulItem<T = any> = {
	data: {
		[s: string]: T;
	};
};

@Injectable({ providedIn: 'root' })
export class ContentfulApiService {
	private readonly url = environment.contentful.url;
	private readonly httpService = inject(HttpClient);

	getProducts(): Observable<Products> {
		const query = `
    query {
      productCollection{
        items {
          sys{
            id
          }
          title
          description
          image{
            url
          }
        }
      }
    }
    `;
		const contentfulURL = `${this.url}?query=${query}`;
		return this.httpService
			.get<ContentfulCollection<Products>>(contentfulURL)
			.pipe(this.getItems<Products>('productCollection'));
	}

	getProduct(id: string): Observable<IProduct> {
		const query = `
    query {
      product(id: "${id}") {
        sys {
          id
        }
        title
        description
        ingredients
        productData
        ean
        image {
          url
        }
      }
    }
    `;
		const contentfulURL = `${this.url}?query=${query}`;
		return this.httpService.get<ContentfulItem<IProduct>>(contentfulURL).pipe(this.getItem<IProduct>('product'));
	}

	private getItems<T = any>(key: string) {
		return (source: Observable<ContentfulCollection<T>>) => {
			return source.pipe(
				map(res => {
					const items = res.data[key].items as any[];
					return items.map(({ sys, ...otherProps }) => ({ ...otherProps, id: sys?.id }));
				})
			);
		};
	}

	private getItem<T = any>(key: string) {
		return (source: Observable<ContentfulItem<T>>) => {
			return source.pipe(
				map(res => {
					const { sys, ...otherProps } = res.data[key] as any;
					return { ...otherProps, id: sys?.id };
				})
			);
		};
	}
}
