import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarChartCanvasComponent } from './bar-chart-canvas.component';

import { ChartCanvasBaseModule } from '../chart-canvas-base/chart-canvas-base.module';

@NgModule({
	declarations: [
		BarChartCanvasComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ChartCanvasBaseModule,
		BarChartCanvasComponent
	]
})
export class BarChartCanvasModule { }
