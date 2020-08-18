// src/app/modules/line-chart-canvas/line-chart-canvas.component.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartCanvasComponent } from './line-chart-canvas.component';

describe('LineChartCanvasComponent', () => {
	let component: LineChartCanvasComponent;
	let fixture: ComponentFixture<LineChartCanvasComponent>;
	// let nativeElement: Element;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LineChartCanvasComponent]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(LineChartCanvasComponent);
				// component = fixture.debugElement.componentInstance;
				component = fixture.componentInstance;
				// nativeElement = fixture.debugElement.nativeElement;
				// nativeElement = fixture.nativeElement;
				fixture.detectChanges();
			});
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// From tour-of-heroes:

	// it('should display "Top Heroes" as headline', () => {
	// 	expect(nativeElement.querySelector('h3').textContent).toEqual('Top Heroes');
	// });

	// it('should call heroService', async(() => {
	// 	expect(getHeroesSpy.calls.any()).toBe(true);
	// }));

	// it('should display 4 links', async(() => {
	// 	expect(nativeElement.querySelectorAll('a').length).toEqual(4);
	// }));
});
