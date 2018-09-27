import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewPageComponent } from './dataview-page.component';

describe('DataviewPageComponent', () => {
  let component: DataviewPageComponent;
  let fixture: ComponentFixture<DataviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
