import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { ChartCanvasBaseModule } from './modules/chart-canvas-base/chart-canvas-base.module';
import { PieChartCanvasModule } from './modules/pie-chart-canvas/pie-chart-canvas.module';
import { BarChartCanvasModule } from './modules/bar-chart-canvas/bar-chart-canvas.module';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			imports: [
				RouterTestingModule,
				// BrowserModule,
				// AppRoutingModule,
				// ChartCanvasBaseComponent,
				ChartCanvasBaseModule,
				PieChartCanvasModule,
				BarChartCanvasModule
			],
			schemas: [
				CUSTOM_ELEMENTS_SCHEMA
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});

	it(`should have as title 'thaw-angular-component-library'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app.title).toEqual('thaw-angular-component-library');
	});

	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);

	// 	fixture.detectChanges();

	// 	const compiled = fixture.debugElement.nativeElement;

	// 	expect(compiled.querySelector('.content span').textContent).toContain('thaw-angular-component-library app is running!');
	// });
});
