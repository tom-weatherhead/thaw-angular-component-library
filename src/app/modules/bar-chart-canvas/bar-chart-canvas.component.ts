import {
	Component,
	// ChangeDetectorRef, // ChangeDetectorRef not needed
	OnInit
} from '@angular/core';

import { ChartCanvasBaseComponent } from '../chart-canvas-base/chart-canvas-base.component';

// templateUrl: './bar-chart-canvas.component.html',
// styleUrls: ['./bar-chart-canvas.component.scss']

@Component({
	selector: 'app-bar-chart-canvas',
	templateUrl: '../chart-canvas-base/chart-canvas-base.component.html',
	styleUrls: ['../chart-canvas-base/chart-canvas-base.component.scss']
})
export class BarChartCanvasComponent extends ChartCanvasBaseComponent
	implements OnInit {
	// constructor(protected changeDetectorRef: ChangeDetectorRef) { // changeDetectorRef not needed
	constructor() {
		// super(changeDetectorRef);
		super();

		super.setChartType('bar', 'Bar');
	}

	ngOnInit() {
		super.onInit();
	}
}
