// src/app/modules/pie-chart-canvas/pie-chart-canvas.module.ts

import { NgModule /* , CUSTOM_ELEMENTS_SCHEMA */ } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { ChartCanvasBaseModule } from '../chart-canvas-base/chart-canvas-base.module';

import { PieChartCanvasComponent } from './pie-chart-canvas.component';

@NgModule({
	declarations: [PieChartCanvasComponent],
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
		PieChartCanvasComponent
	]
})
export class PieChartCanvasModule {}
