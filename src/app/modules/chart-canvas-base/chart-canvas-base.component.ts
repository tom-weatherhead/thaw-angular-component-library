import {
	// AfterViewChecked,
	Component,
	ElementRef,
	// OnInit,
	ViewChild
} from '@angular/core';

import { Chart } from 'chart.js';

const chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

@Component({
	// selector: 'chart-canvas-base',
	templateUrl: './chart-canvas-base.component.html',
	styleUrls: ['./chart-canvas-base.component.scss']
})
export class ChartCanvasBaseComponent /* implements AfterViewChecked, OnInit */ {
	@ViewChild('canvas', { static: true })
	protected canvas: ElementRef<HTMLCanvasElement>;

	context: CanvasRenderingContext2D;
	chart: Chart;
	public chartOptions: any;
	public chartLabels: string[];
	public chartType: string;
	public chartLegend = true;
	public chartData: any[];

	chartTypeCapitalized: string;

	constructor() {
		// this.chartType = 'bar';
		// this.chartTypeCapitalized = 'Bar';
	}

	// protected constructor(chartType: string = 'bar', chartTypeCapitalized: string = 'Bar') {
	// 	this.chartType = chartType;
	// 	this.chartTypeCapitalized = chartTypeCapitalized;
	// }

	protected setChartType(chartType: string, chartTypeCapitalized: string) {
		this.chartType = chartType;
		this.chartTypeCapitalized = chartTypeCapitalized;
	}

	// ngOnInit() {
	// ngAfterViewChecked() {
	protected onInit() {
		this.context = this.canvas.nativeElement.getContext('2d');

		this.displayChart();
	}

	public sayHi() {
		console.log(`Saying Hi from ${this.chartType}-chart-canvas.component.ts`);
	}

	createDefaultChartSettings(): any {
		return {
			labels: ['One', 'Two', 'Three', 'Four'],
			type: this.chartType,
			data: [10, 20, 30, 40]
		};
	}

	public displayChart() {
		const chartSettings = this.createDefaultChartSettings();
		const oldChartType = this.chartType;

		this.chartOptions = chartSettings.options;
		this.chartLabels = chartSettings.labels;
		// this.chartLabels = this.clone(chartSettings.labels);
		// this.chartType = chartSettings.type;
		// this.chartLegend = chartSettings.legend;

		// if (oldChartType === 'pie' && this.chartType === 'pie') {
		//   let clone = JSON.parse(JSON.stringify(this.chartData));

		//   clone = chartSettings.data;

		//   this.chartData = clone;
		// } else {
		this.chartData = chartSettings.data;
		// }

		this.chart = new Chart(this.context, {
			type: chartSettings.type,
			// data: this.chartData,
			// data: {
			//   labels: ['Group 1', 'Group 2', 'Group 3'],
			//   datasets: [{
			//       label: 'Groups',
			//       data: [12, 19, 3]
			//   }]
			// },
			data: {
				// labels: ['#apples', '#pears', '#apricots', '#acorns', '#amigas' /*, '#orics' */],
				datasets: [
					{
						label: 'Test',
						lineTension: 0.15,
						data: [1, 1, 2, 3, 5],
						// backgroundColor: '#37738353',
						backgroundColor: [
							chartColors.red,
							chartColors.orange,
							chartColors.yellow,
							chartColors.green,
							chartColors.blue
						],
						borderColor: '#37738353',
						borderWidth: 3,
						borderCapStyle: 'round',
						fill: true
					}
				],
				labels: [
					'Red',
					'Orange',
					'Yellow',
					'Green',
					'Blue'
				]
			},
			// labels: chartSettings.labels,
			options: {
				hover: {
					intersect: true,
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
						padding: 40,
					}
				}
			}
		});
		// this.showChart = true;
		// this.changeDetectorRef.detectChanges();      // !!! This is necessary.
	}
}
