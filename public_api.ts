// 1) This style works:

// Component modules:
export * from './src/app/modules/chart-canvas-base/chart-canvas-base.module';
export * from './src/app/modules/chart-canvas-base/chart-canvas-base.component';

export * from './src/app/modules/bar-chart-canvas/bar-chart-canvas.module';
export * from './src/app/modules/bar-chart-canvas/bar-chart-canvas.component';

export * from './src/app/modules/pie-chart-canvas/pie-chart-canvas.module';
export * from './src/app/modules/pie-chart-canvas/pie-chart-canvas.component';

export * from './src/app/modules/line-chart-canvas/line-chart-canvas.module';
export * from './src/app/modules/line-chart-canvas/line-chart-canvas.component';

// 2) This style works too:
// export { ChartCanvasBaseModule } from './src/app/modules/chart-canvas-base/chart-canvas-base.module';
// export { ChartCanvasBaseComponent } from './src/app/modules/chart-canvas-base/chart-canvas-base.component';
