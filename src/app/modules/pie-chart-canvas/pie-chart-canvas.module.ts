import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PieChartCanvasComponent } from './pie-chart-canvas.component';

import { ChartCanvasBaseModule } from '../chart-canvas-base/chart-canvas-base.module';

@NgModule({
	declarations: [
		PieChartCanvasComponent
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
		PieChartCanvasComponent
	]
})
export class PieChartCanvasModule { }
