import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PieChartCanvasComponent } from './pie-chart-canvas.component';

@NgModule({
	declarations: [PieChartCanvasComponent],
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		FormsModule,
		PieChartCanvasComponent // <-- this!
	]
})
export class PieChartCanvasModule { }
