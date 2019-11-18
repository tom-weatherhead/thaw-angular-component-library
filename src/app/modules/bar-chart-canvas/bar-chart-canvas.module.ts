import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartCanvasBaseComponent } from '../../components/chart-canvas-base/chart-canvas-base.component';
import { BarChartCanvasComponent } from './bar-chart-canvas.component';

@NgModule({
	declarations: [
		ChartCanvasBaseComponent,
		BarChartCanvasComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ChartCanvasBaseComponent,
		BarChartCanvasComponent
	]
})
export class BarChartCanvasModule { }
