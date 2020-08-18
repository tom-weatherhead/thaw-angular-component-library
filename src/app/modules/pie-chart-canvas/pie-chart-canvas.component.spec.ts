import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartCanvasComponent } from './pie-chart-canvas.component';

describe('PieChartCanvasComponent', () => {
	let component: PieChartCanvasComponent;
	let fixture: ComponentFixture<PieChartCanvasComponent>;
	// let nativeElement: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PieChartCanvasComponent]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(PieChartCanvasComponent);
				// component = fixture.debugElement.componentInstance;
				component = fixture.componentInstance;
				// nativeElement = fixture.debugElement.nativeElement;
				// nativeElement = fixture.nativeElement;
				fixture.detectChanges();
			});
	}));

	// beforeEach(() => {
	// 	fixture = TestBed.createComponent(PieChartCanvasComponent);
	// 	component = fixture.componentInstance;
	// 	fixture.detectChanges();
	// });

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
