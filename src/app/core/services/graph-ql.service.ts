import { Injectable } from '@angular/core';

type QueryObject = { [key: string]: any };

@Injectable({ providedIn: 'root' })
export class GraphQLService {
	createQuery(url: string, query: QueryObject): string {
		const formattedQuery = this.formatQuery(query);
		return `${url}?query=query${formattedQuery}`;
	}

	private formatQuery(query: QueryObject, isFirst = true): string {
		let formattedQuery = isFirst ? '{' : '';

		for (const key in query) {
			formattedQuery += `${key}{`;
			const fields = query[key];

			if (Array.isArray(fields)) {
				formattedQuery += fields.join(' ');
			} else if (typeof fields === 'object') {
				formattedQuery += this.formatQuery(fields, false);
			}

			formattedQuery += '}';
		}

		formattedQuery += isFirst ? '}' : '';

		return formattedQuery;
	}
}
