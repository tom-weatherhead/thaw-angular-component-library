import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ChartCanvasBaseModule } from '../chart-canvas-base/chart-canvas-base.module';
import { BarChartCanvasComponent } from './bar-chart-canvas.component';

describe('BarChartCanvasComponent', () => {
	let component: BarChartCanvasComponent;
	let fixture: ComponentFixture<BarChartCanvasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BarChartCanvasComponent
			],
			schemas: [
				CUSTOM_ELEMENTS_SCHEMA
			],
			imports: [
				ChartCanvasBaseModule,
				CommonModule,
				FormsModule
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BarChartCanvasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
