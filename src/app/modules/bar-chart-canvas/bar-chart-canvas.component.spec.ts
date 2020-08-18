import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCanvasComponent } from './bar-chart-canvas.component';

describe('BarChartCanvasComponent', () => {
	let component: BarChartCanvasComponent;
	let fixture: ComponentFixture<BarChartCanvasComponent>;
	// let nativeElement: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BarChartCanvasComponent]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(BarChartCanvasComponent);
				// component = fixture.debugElement.componentInstance;
				component = fixture.componentInstance;
				// nativeElement = fixture.debugElement.nativeElement;
				// nativeElement = fixture.nativeElement;
				fixture.detectChanges();
			});
	}));

	// beforeEach(() => {
	// 	fixture = TestBed.createComponent(BarChartCanvasComponent);
	// 	component = fixture.componentInstance;
	// 	fixture.detectChanges();
	// });

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
