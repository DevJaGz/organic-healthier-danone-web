import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

@NgModule({
	declarations: [NavbarComponent, MarqueeComponent, FooterComponent, UnderConstructionComponent],
	imports: [CommonModule, RouterModule],
	exports: [NavbarComponent, MarqueeComponent, FooterComponent, UnderConstructionComponent],
})
export class SharedModule {}
