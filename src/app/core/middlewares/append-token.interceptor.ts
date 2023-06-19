import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class AppendTokenInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// Intercept contentful requests and append the API key to the request headers
		const contentfulURL = environment.contentful.url;
		if (request.url.includes(contentfulURL)) {
			const clonedRequest = request.clone({
				headers: request.headers.append('Authorization', `Bearer ${environment.contentful.APIKey}`),
			});
			return next.handle(clonedRequest);
		}
		return next.handle(request);
	}
}
