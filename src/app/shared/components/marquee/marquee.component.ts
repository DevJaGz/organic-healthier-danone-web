import { DOCUMENT } from '@angular/common';
import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostListener,
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
	private _labels: string[] = [
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
	@Input()
	set labels(value: string[]) {
		this._labels = value;
	}

	private readonly host = inject(ElementRef);
	private readonly document = inject(DOCUMENT);
	private readonly renderer = inject(Renderer2);
	private readonly changeDetector = inject(ChangeDetectorRef);

	marqueeItemWidth = 0; // px - Calculated in runtime
	labelsShown: string[] = []; // Calculated in runtime
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
		this.labelsShown = [...this._labels, ...this.getDuplicateLabels(numDuplicates)];
		console.log('Label Shown lenght', this.labelsShown.length, this.labelsShown);

		this.changeDetector.detectChanges();
	}

	private makeCalculations(): MarqueeCalculationResult {
		const minMarqueeItemWidth = Math.ceil(this.minMarqueeItemWidth + this.marqueeItemPadding * 2);
		const marqueeWidth = this.host.nativeElement.clientWidth;
		const initialNumberOfMarqueeItems = this._labels.length;
		const marqueeItemWidth = Math.max(
			minMarqueeItemWidth,
			Math.min(minMarqueeItemWidth * 2, Math.ceil(marqueeWidth / initialNumberOfMarqueeItems))
		);
		const totalWidth = initialNumberOfMarqueeItems * marqueeItemWidth;
		const excessWidth = Math.abs(marqueeWidth - totalWidth);
		const numDuplicates = Math.max(Math.ceil(marqueeWidth / excessWidth), Math.ceil(excessWidth / marqueeWidth));
		const cicles = totalWidth / marqueeWidth;
		const duration = Math.max(
			4,
			Math.min(
				40,
				Math.ceil((this._labels.length - numDuplicates) * (1 / numDuplicates) + 2 * this._labels.length)
			)
		);

		console.log('marqueeWidth', marqueeWidth);
		console.log('numberOfMarqueeItems', initialNumberOfMarqueeItems);
		console.log('marqueeItemWidth', marqueeItemWidth);
		console.log('totalWidth', totalWidth);
		console.log('excessWidth', excessWidth);
		console.log('numDuplicates', numDuplicates);
		console.log('cicles', cicles);
		console.log('duration', duration);
		return {
			numDuplicates,
			cicles,
			duration,
			marqueeItemWidth,
		};
	}

	private getDuplicateLabels(numDuplicates: number): string[] {
		const labels: string[] = [];
		const labelsLength = this._labels.length;
		if (numDuplicates > labelsLength) {
			for (let i = 0; i < numDuplicates; i++) {
				labels.push(this._labels[i % labelsLength]);
			}
			return labels.map(v => '*' + v.slice(1));
		}
		return this._labels.slice(0, numDuplicates).map(v => '*' + v.slice(1));
	}

	@HostListener('window:resize')
	onResize() {
		this.updateCalculations();
	}
}
