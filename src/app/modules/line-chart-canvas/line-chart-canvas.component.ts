// src/app/modules/line-chart-canvas/line-chart-canvas.component.ts

import { Component, ElementRef, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

import {
	// clone,
	createNaNArray,
	ifDefinedThenElse,
	padOrTrimArrayAtStart
} from 'thaw-common-utilities.ts';

import { Colours } from 'thaw-colour';

// const minNumSamples = 16;
// const maxNumSamples = 128;

@Component({
	selector: 'app-line-chart-canvas',
	templateUrl: './line-chart-canvas.component.html',
	styleUrls: ['./line-chart-canvas.component.scss']
})
export class LineChartCanvasComponent {
	@ViewChild('canvas', { static: false })
	private canvas: ElementRef<HTMLCanvasElement>;

	// public chartLegend = true;

	private context: CanvasRenderingContext2D;
	private chart: Chart;

	private chartConfiguration: Chart.ChartConfiguration;

	private numSamples: number;
	private defaultNumSamples = 33;
	// private chartOptionsData: Chart.ChartData = {};
	private chartDataArrays: number[][] = [];

	constructor() {
		this.numSamples = this.defaultNumSamples;
	}

	public setChartTitle(title: string): void {
		this.chartConfiguration.options.title = {
			display: true,
			text: title
		};
	}

	// TODO: public setLabels(labels: string[] | number): void { ... }
	// If labels is a number, the the labels will be '0', '1', ... `${labels - 1}`
	public setLabels(labelsParam: string[]): void {
		this.numSamples = labelsParam.length;

		this.chartConfiguration = {
			type: 'line',
			data: {
				labels: labelsParam, // this.labels,
				datasets: []
			},
			options: {
				// options should be of type Chart.ChartOptions
				responsive: true,
				animation: undefined, // This disables chart animation during updates.
				title: {
					display: false
				},
				tooltips: {
					mode: 'index'
				},
				scales: {
					xAxes: [
						{
							display: true,
							scaleLabel: {
								display: true
							}
						}
					],
					yAxes: [
						{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Value'
								// },
								// ticks: {
								// 	// suggestedMin: -10,
								// 	// suggestedMax: 200,
							}
						}
					]
				}
			}
		};
	}

	public setLabelsEx(labelsParam: string[]): void {
		this.numSamples = labelsParam.length;
		this.chartConfiguration.data.labels = labelsParam;
	}

	public setYAxis0Ticks(
		suggestedMinParam: number,
		suggestedMaxParam: number
	): void {
		this.chartConfiguration.options.scales.yAxes[0].ticks = {
			suggestedMin: suggestedMinParam,
			suggestedMax: suggestedMaxParam
		};
	}

	// This pushDataset() is specific to the line chart (e.g. lineTension)
	// This will be abstract in the new base class.

	public pushDataset(label: string, borderColor?: string): void {
		this.chartConfiguration.data.datasets.push({
			label,
			data: createNaNArray(this.numSamples),
			borderColor: ifDefinedThenElse(borderColor, Colours.black),
			backgroundColor: Colours.transparent,
			fill: false,
			lineTension: 0.15
		});
	}

	public createAndDisplayChart(): void {
		this.context = this.canvas.nativeElement.getContext('2d');
		this.chart = new Chart(this.context, this.chartConfiguration);
	}

	public pushNewData(...values: number[]): void {
		// if (values.length !== this.chartConfiguration.data.datasets.length) {
		// 	throw new Error(
		// 		`LineChartCanvasComponent.pushNewData() : Expected ${this.chartConfiguration.data.datasets.length} values, ` +
		// `but received ${values.length}.`
		// 	);
		// }

		for (let i = 0; i < values.length; i++) {
			this.chartConfiguration.data.datasets[i].data.shift();
			this.chartConfiguration.data.datasets[i].data.push(values[i]);
		}

		this.chart.update();
	}

	public getDataFromDataset(i: number): number[] {
		const dataset = this.chartConfiguration.data.datasets[i];
		const result: number[] = [];

		if (dataset) {
			for (const value of dataset.data) {
				result.push(value as number);
			}
		}

		return result;
	}

	public setDataInDataset(labelParam: string, data: number[]): void {
		const dataset = this.findDatasetFromLabel(labelParam);

		if (typeof dataset === 'undefined') {
			return;
		}

		dataset.data = padOrTrimArrayAtStart(data, this.numSamples, NaN);

		this.chart.update();
	}

	public clearDataInAllDatasets(): void {
		for (const dataset of this.chartConfiguration.data.datasets) {
			dataset.data = createNaNArray(this.numSamples);
		}
	}

	private findDatasetFromLabel(
		labelParam: string
	): Chart.ChartDataSets | undefined {
		return this.chartConfiguration.data.datasets.find(
			(ds) => ds.label === labelParam
		);
	}
}
