import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartCanvasBaseComponent } from './chart-canvas-base.component';

@NgModule({
	declarations: [
		ChartCanvasBaseComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,
		FormsModule,
		ChartCanvasBaseComponent
	]
})
export class ChartCanvasBaseModule { }
