import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCanvasComponent } from './bar-chart-canvas.component';

describe('BarChartCanvasComponent', () => {
	let component: BarChartCanvasComponent;
	let fixture: ComponentFixture<BarChartCanvasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ BarChartCanvasComponent ]
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
