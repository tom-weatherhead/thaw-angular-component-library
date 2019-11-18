import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartCanvasComponent } from './pie-chart-canvas.component';

describe('PieChartCanvasComponent', () => {
	let component: PieChartCanvasComponent;
	let fixture: ComponentFixture<PieChartCanvasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PieChartCanvasComponent ]
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
