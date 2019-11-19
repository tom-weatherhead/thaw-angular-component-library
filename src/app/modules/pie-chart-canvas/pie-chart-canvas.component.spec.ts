import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartCanvasComponent } from './pie-chart-canvas.component';

describe('PieChartCanvasComponent', () => {
	let component: PieChartCanvasComponent;
	let fixture: ComponentFixture<PieChartCanvasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				PieChartCanvasComponent
			],
			schemas: [
				CUSTOM_ELEMENTS_SCHEMA
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PieChartCanvasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
