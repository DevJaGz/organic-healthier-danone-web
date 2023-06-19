import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { AppendTokenInterceptor } from '@core/middlewares/append-token.interceptor';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, CoreModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AppendTokenInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
