import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
	declarations: [NavbarComponent, MarqueeComponent],
	imports: [CommonModule, RouterModule],
	exports: [NavbarComponent, MarqueeComponent],
})
export class SharedModule {}
