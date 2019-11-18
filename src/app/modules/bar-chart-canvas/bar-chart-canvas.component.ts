import { Component, OnInit } from '@angular/core';

import { ChartCanvasBaseComponent } from '../chart-canvas-base/chart-canvas-base.component';

// templateUrl: './bar-chart-canvas.component.html',
// styleUrls: ['./bar-chart-canvas.component.scss']

@Component({
	selector: 'bar-chart-canvas',
	templateUrl: '../chart-canvas-base/chart-canvas-base.component.html',
	styleUrls: ['../chart-canvas-base/chart-canvas-base.component.scss']
})
export class BarChartCanvasComponent extends ChartCanvasBaseComponent implements OnInit {

	constructor() {
		// super('bar', 'Bar');
		super();

		super.setChartType('bar', 'Bar');
	}

	ngOnInit() {
		super.onInit();
	}
}
