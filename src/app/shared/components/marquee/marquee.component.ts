import { DOCUMENT } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	Input,
	Renderer2,
	inject,
} from '@angular/core';

export type MarqueeCalculationResult = {
	numDuplicates: number;
	cicles: number;
	duration: number;
	marqueeItemWidth: number;
};

@Component({
	selector: 'app-marquee',
	templateUrl: './marquee.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent implements AfterViewInit {
	@Input()
	labels = [
		'Innovación',
		'Sostenibilidad',
		'Salud',
		'Nutrición',
		'Sabores',
		'Ecológico',
		'Delicioso',
		'Compromiso',
		'Variedad',
		'Natural',
		'Equilibrio',
		'Frescura',
		'Cuidado',
		'Consciencia',
		'Responsabilidad',
		'Placer',
		'Calidad',
		'Vida',
	];

	private readonly host = inject(ElementRef);
	private readonly document = inject(DOCUMENT);
	private readonly renderer = inject(Renderer2);
	private readonly changeDetector = inject(ChangeDetectorRef);

	marqueeItemWidth = 0; // px - Calculated in runtime
	labelShown: string[] = []; // Calculated in runtime
	readonly marqueeItemPadding = 16; // px
	readonly minMarqueeItemWidth = 150; // px

	ngAfterViewInit(): void {
		this.updateCalculations();
	}

	private updateCalculations() {
		const { marqueeItemWidth, cicles, duration, numDuplicates } = this.makeCalculations();
		// Set css variables to control the marquee animation that is in tailwind.config.js
		this.renderer.setProperty(
			this.document.body,
			'style',
			`
       --marquee-duration: ${duration}s;
       --marquee-cicles: -${cicles * 100}%
       `
		);
		// Set the width of the marquee item
		this.marqueeItemWidth = marqueeItemWidth;
		this.labelShown = [...this.labels, ...this.labels.slice(0, numDuplicates).map(v => '' + v.slice(0))];
		this.changeDetector.detectChanges();
	}

	private makeCalculations(): MarqueeCalculationResult {
		const minMarqueeItemWidth = this.minMarqueeItemWidth + this.marqueeItemPadding * 2;
		const marqueeWidth = this.host.nativeElement.clientWidth;
		const numberOfMarqueeItems = this.labels.length;
		const marqueeItemWidth = Math.max(
			minMarqueeItemWidth,
			Math.min(minMarqueeItemWidth * 2, Math.round(marqueeWidth / numberOfMarqueeItems))
		);
		const totalWidth = numberOfMarqueeItems * marqueeItemWidth;
		const excessWidth = totalWidth - marqueeWidth;
		const numDuplicates = Math.ceil(excessWidth / marqueeItemWidth);
		const cicles = totalWidth / marqueeWidth;
		const duration = Math.max(4, Math.min(40, Math.ceil(this.labels.length * 0.5 + 18)));

		return {
			numDuplicates,
			cicles,
			duration,
			marqueeItemWidth,
		};
	}
}
