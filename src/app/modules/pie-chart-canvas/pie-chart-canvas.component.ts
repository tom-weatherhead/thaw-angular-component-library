import {
	Component,
	// ChangeDetectorRef, // ChangeDetectorRef not needed
	OnInit
} from '@angular/core';

import { ChartCanvasBaseComponent } from '../chart-canvas-base/chart-canvas-base.component';

// templateUrl: './pie-chart-canvas.component.html',
// styleUrls: ['./pie-chart-canvas.component.scss']

@Component({
	selector: 'app-pie-chart-canvas',
	templateUrl: '../chart-canvas-base/chart-canvas-base.component.html',
	styleUrls: ['../chart-canvas-base/chart-canvas-base.component.scss']
})
export class PieChartCanvasComponent extends ChartCanvasBaseComponent
	implements OnInit {
	// constructor(protected changeDetectorRef: ChangeDetectorRef) { // changeDetectorRef not needed
	constructor() {
		// super(changeDetectorRef);
		super();

		super.setChartType('pie', 'Pie');
	}

	ngOnInit() {
		super.onInit();
	}
}
