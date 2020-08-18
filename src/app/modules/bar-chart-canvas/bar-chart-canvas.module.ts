// src/app/modules/bar-chart-canvas/bar-chart-canvas.module.ts

import { NgModule /* , CUSTOM_ELEMENTS_SCHEMA */ } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { ChartCanvasBaseModule } from '../chart-canvas-base/chart-canvas-base.module';

import { BarChartCanvasComponent } from './bar-chart-canvas.component';

@NgModule({
	declarations: [BarChartCanvasComponent],
	// schemas: [
	// 	CUSTOM_ELEMENTS_SCHEMA
	// ],
	// imports: [
	// 	CommonModule
	// ],
	exports: [
		// CommonModule,
		// FormsModule,
		// ChartCanvasBaseModule,
		BarChartCanvasComponent
	]
})
export class BarChartCanvasModule {}
