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
	ViewChild,
	inject,
} from '@angular/core';

export type MarqueeCalculationResult = {
	numDuplicates: number; // Number of duplicated labels
	cicles: number; // Number of cicles of the marquee animation
	duration: number; // Duration of the marquee animation
	marqueeItemWidth: number; // Width of the marquee item
};

@Component({
	selector: 'app-marquee',
	templateUrl: './marquee.component.html',
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueeComponent implements AfterViewInit {
	/**
	 * Marquee element in the view
	 */
	@ViewChild('marqueeRef') marquee: ElementRef<HTMLDivElement>;

	/**
	 * Labels to show in the marquee
	 */
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
		this.updateCalculations();
	}

	/**
	 * Host element in the view
	 */
	private readonly host = inject(ElementRef);

	/**
	 * Document object in the browser
	 */
	private readonly document = inject(DOCUMENT);

	/**
	 * Renderer2 object to manipulate the DOM
	 */
	private readonly renderer = inject(Renderer2);

	/**
	 * ChangeDetectorRef object to trigger change detection
	 */
	private readonly changeDetector = inject(ChangeDetectorRef);

	/**
	 * Width to set to the marquee item
	 */
	marqueeItemWidth = 0; // px - Calculated in runtime

	/**
	 * Labels to show in the view
	 */
	labelsShown: string[] = []; // Calculated in runtime

	/**
	 * Marquee item padding
	 */
	readonly marqueeItemPadding = 16; // px

	/**
	 * Minimum width of the marquee item
	 */
	readonly minMarqueeItemWidth = 150; // px

	ngAfterViewInit(): void {
		this.updateCalculations();
	}

	/**
	 * Update the calculations of the marquee
	 */
	private updateCalculations() {
		// Reset the marquee animation
		this.reset();
		// Get the calculations
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
		// Set the labels to show in the view
		this.labelsShown = [...this._labels, ...this.getDuplicateLabels(numDuplicates)];
		// Trigger change detection
		this.changeDetector.detectChanges();
	}

	/**
	 * Make the calculations to get the number of duplicated labels, cicles and duration of the marquee animation
	 * @returns Result of the calculations
	 */
	private makeCalculations(): MarqueeCalculationResult {
		// Get the minimum width of the marquee item
		const minMarqueeItemWidth = Math.ceil(this.minMarqueeItemWidth + this.marqueeItemPadding * 2);
		// Get the width of the marquee
		const marqueeWidth = this.host.nativeElement.clientWidth;
		// Get the initial number of marquee items
		const initialNumberOfMarqueeItems = this._labels.length;
		// Get the width of the marquee item
		const marqueeItemWidth = Math.max(
			minMarqueeItemWidth,
			Math.min(minMarqueeItemWidth * 2, Math.ceil(marqueeWidth / initialNumberOfMarqueeItems))
		);
		// Get the total width of the marquee items
		const totalMarqueItemsWidth = initialNumberOfMarqueeItems * marqueeItemWidth;
		// Get the number of duplicated labels
		const numDuplicates = Math.ceil(marqueeWidth / marqueeItemWidth);
		// Get the number of cicles of the marquee animation
		const cicles = totalMarqueItemsWidth / marqueeWidth;
		// Get the duration of the marquee animation
		const duration = Math.max(
			4,
			Math.min(
				40,
				Math.ceil((this._labels.length - numDuplicates) * (1 / numDuplicates) + 2 * this._labels.length)
			)
		);

		return {
			numDuplicates,
			cicles,
			duration,
			marqueeItemWidth,
		};
	}

	/**
	 *
	 * @param numDuplicates - Number of duplicated labels
	 * @returns Duplicated labels
	 */
	private getDuplicateLabels(numDuplicates: number): string[] {
		const labels: string[] = [];
		const labelsLength = this._labels.length;
		if (numDuplicates > labelsLength) {
			for (let i = 0; i < numDuplicates; i++) {
				labels.push(this._labels[i % labelsLength]);
			}
			return labels;
		}
		return this._labels.slice(0, numDuplicates);
	}

	/**
	 * Reset the marquee animation
	 */
	private reset() {
		// Get the marquee element from the view component
		const marqueeElement = this.marquee.nativeElement;
		// Trigger to autocalculate the width of the marquee element
		this.renderer.setStyle(marqueeElement, 'width', 'auto');
		// Set the initial position of the marquee element
		this.renderer.setStyle(marqueeElement, 'translateX', '0');
		// Remove the marquee animation
		this.renderer.removeClass(marqueeElement, 'animate-marquee');
		// After one cycle of the event loop, add the marquee animation
		setTimeout(() => {
			// Add the marquee animation
			this.renderer.addClass(marqueeElement, 'animate-marquee');
		}, 0);
	}

	/**
	 * Update the calculations when the window is resized
	 */
	@HostListener('window:resize')
	onResize() {
		this.updateCalculations();
	}
}
