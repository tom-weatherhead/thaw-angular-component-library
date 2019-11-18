import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChartCanvasBaseComponent } from './components/chart-canvas-base/chart-canvas-base.component';
import { PieChartCanvasModule } from './modules/pie-chart-canvas/pie-chart-canvas.module';
import { BarChartCanvasModule } from './modules/bar-chart-canvas/bar-chart-canvas.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ChartCanvasBaseComponent,
		PieChartCanvasModule,
		BarChartCanvasModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
