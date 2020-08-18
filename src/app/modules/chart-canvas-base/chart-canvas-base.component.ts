// src/app/modules/chart-canvas-base/chart-canvas-base.component.ts

import {
	// ChangeDetectorRef, // ChangeDetectorRef not needed
	Component,
	ElementRef,
	ViewChild
} from '@angular/core';

import { Chart } from 'chart.js';

import { Colours } from 'thaw-colour';

@Component({
	selector: 'app-chart-canvas-base',
	templateUrl: './chart-canvas-base.component.html',
	styleUrls: ['./chart-canvas-base.component.scss']
})
export class ChartCanvasBaseComponent {
	@ViewChild('canvas', { static: true })
	protected canvas: ElementRef<HTMLCanvasElement>;

	public chartTypeCapitalized: string;
	public chartType: string;
	// public chartLegend = true;

	protected context: CanvasRenderingContext2D;
	protected chart: Chart;

	// TODO: Rename chartOptions to chartConfiguration
	private chartOptionsValue: Chart.ChartConfiguration;

	// constructor(protected changeDetectorRef: ChangeDetectorRef) { // changeDetectorRef not needed
	// constructor() {}

	protected onInit(): void {
		// This will be called from the child class's ngOnInit().
		this.context = this.canvas.nativeElement.getContext('2d');

		this.displayChart();
	}

	protected setChartType(
		chartType: string,
		chartTypeCapitalized: string
	): void {
		this.chartType = chartType;
		this.chartTypeCapitalized = chartTypeCapitalized;
	}

	public get chartOptions(): Chart.ChartConfiguration {
		return this.chartOptionsValue;
	}

	public set chartOptions(value: Chart.ChartConfiguration) {
		this.chartOptionsValue = value;
	}

	public displayChart(): void {
		this.configureChart();
		this.chart = new Chart(this.context, this.chartOptions);
	}

	public updateChart(): void {
		// Call this when the chart's data changes.
		this.chart.update();
	}

	protected configureChart(): void {
		// Default implementation.
		this.chartOptions = {
			type: this.chartType,
			data: {
				datasets: [
					{
						label: 'Test',
						lineTension: 0.15,
						data: [1, 1, 2, 3, 5],
						// backgroundColor: '#37738353',
						backgroundColor: [
							Colours.red,
							Colours.orange,
							Colours.yellow,
							Colours.green,
							Colours.blue
						],
						// borderColor: '#37738353',
						borderColor: Colours.black,
						borderWidth: 3,
						borderCapStyle: 'round',
						fill: true
					}
				],
				labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
			},
			options: {
				// Animation is enabled by default.
				responsive: true,
				hover: {
					intersect: true
				},
				// onClick(ev: MouseEvent, points: any[]) {
				// 	console.log('onClick() :', points, ev);
				// },
				// onHover(ev: MouseEvent, points: any[]) {
				// 	console.log('onHover() :', points, ev);
				// },
				title: {
					// text: ['foo', 'bar'],
					text: 'Title'
				},
				legend: {
					display: true,
					labels: {
						usePointStyle: true,
						padding: 40
					}
				}
			}
		};
	}
}
