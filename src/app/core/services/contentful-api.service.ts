import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Products } from '@core/interfaces/products.interface';
import { GraphQLService } from '@core/services/graph-ql.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

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
		return this.httpService.get<Products>(url);
	}
}
