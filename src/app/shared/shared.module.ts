import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
	declarations: [NavbarComponent, MarqueeComponent, FooterComponent],
	imports: [CommonModule, RouterModule],
	exports: [NavbarComponent, MarqueeComponent, FooterComponent],
})
export class SharedModule {}
