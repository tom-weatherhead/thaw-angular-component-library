import { Component, ViewChild } from '@angular/core';

import { BarChartCanvasComponent } from './modules/bar-chart-canvas/bar-chart-canvas.component';
import { PieChartCanvasComponent } from './modules/pie-chart-canvas/pie-chart-canvas.component';
import { LineChartCanvasComponent } from './modules/line-chart-canvas/line-chart-canvas.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild('barChart', { static: false })
	barChart: BarChartCanvasComponent;
	@ViewChild('pieChart', { static: false })
	pieChart: PieChartCanvasComponent;
	@ViewChild('lineChart', { static: false })
	lineChart: LineChartCanvasComponent;

	title = 'thaw-angular-component-library';
}
