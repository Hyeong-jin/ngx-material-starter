import { DataviewPageModule } from './dataview-page.module';

describe('DataviewPageModule', () => {
  let dataviewPageModule: DataviewPageModule;

  beforeEach(() => {
    dataviewPageModule = new DataviewPageModule();
  });

  it('should create an instance', () => {
    expect(dataviewPageModule).toBeTruthy();
  });
});
