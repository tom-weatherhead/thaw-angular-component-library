// **** Modules ****
// import { CommonModule } from '@angular/common';
import { NgModule /*, CUSTOM_ELEMENTS_SCHEMA */ } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

// **** Components ****
// import { ChartCanvasBaseModule } from './modules/chart-canvas-base/chart-canvas-base.module';
import { BarChartCanvasModule } from './modules/bar-chart-canvas/bar-chart-canvas.module';
import { LineChartCanvasModule } from './modules/line-chart-canvas/line-chart-canvas.module';
import { PieChartCanvasModule } from './modules/pie-chart-canvas/pie-chart-canvas.module';

@NgModule({
	// schemas: [
	// 	CUSTOM_ELEMENTS_SCHEMA
	// ],
	imports: [
		// AppRoutingModule,
		BrowserModule,
		// CommonModule,
		// FormsModule,
		// HttpClientModule,

		// ChartCanvasBaseModule,
		BarChartCanvasModule,
		LineChartCanvasModule,
		PieChartCanvasModule
	],
	declarations: [AppComponent],
	providers: [
		// E.g. Angular services
	],
	// exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
