import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Products } from '@core/interfaces/products.interface';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export type ContentfulCollection<T = any> = {
	data: {
		[s: string]: {
			items: T;
		};
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
}
