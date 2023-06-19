import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Products } from '@core/interfaces/products.interface';
import { GraphQLService } from '@core/services/graph-ql.service';
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
	private readonly graphQLService = inject(GraphQLService);
	private readonly httpService = inject(HttpClient);

	getProducts(): Observable<Products> {
		const query = {
			productCollection: {
				items: ['title', 'description'],
			},
		};
		const url = this.graphQLService.createQuery(this.url, query);
		return this.httpService
			.get<ContentfulCollection<Products>>(url)
			.pipe(this.getItems<Products>('productCollection'));
	}

	private getItems<T = any>(key: string) {
		return (source: Observable<ContentfulCollection<T>>) => {
			return source.pipe(map(res => res.data[key].items));
		};
	}
}
