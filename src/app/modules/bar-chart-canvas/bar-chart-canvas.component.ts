import { Component, OnInit } from '@angular/core';

import { ChartCanvasBaseComponent } from '../chart-canvas-base/chart-canvas-base.component';

// templateUrl: '../../components/chart-canvas-base.component.html',
// styleUrls: ['../../components/chart-canvas-base.component.scss']

@Component({
	selector: 'bar-chart-canvas',
	templateUrl: './bar-chart-canvas.component.html',
	styleUrls: ['./bar-chart-canvas.component.scss']
})
export class BarChartCanvasComponent extends ChartCanvasBaseComponent implements OnInit {

	constructor() {
		// super('bar', 'Bar');
		super();
	}

	// constructor() : super('bar', 'Bar') {
	// }

	ngOnInit() {
		super.onInit();
	}
}
