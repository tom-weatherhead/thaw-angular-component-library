import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCanvasBaseComponent } from './chart-canvas-base.component';

describe('ChartCanvasBaseComponent', () => {
  let component: ChartCanvasBaseComponent;
  let fixture: ComponentFixture<ChartCanvasBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCanvasBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCanvasBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
