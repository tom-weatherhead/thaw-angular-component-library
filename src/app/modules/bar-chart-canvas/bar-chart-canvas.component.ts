import { Component, OnInit } from '@angular/core';

import { ChartCanvasBaseComponent } from '../../components/chart-canvas-base/chart-canvas-base.component';

// templateUrl: './bar-chart-canvas.component.html',
// styleUrls: ['./bar-chart-canvas.component.scss']

@Component({
	selector: 'bar-chart-canvas',
	templateUrl: '../../components/chart-canvas-base.component.html',
	styleUrls: ['../../components/chart-canvas-base.component.scss']
})
export class BarChartCanvasComponent extends ChartCanvasBaseComponent {

	constructor() {
		// super('bar', 'Bar');
		super();
	}

	// constructor() : super('bar', 'Bar') {
	// }
}
