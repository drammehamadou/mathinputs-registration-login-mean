import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContourPlotComponent } from './contour-plot.component';

describe('ContourPlotComponent', () => {
  let component: ContourPlotComponent;
  let fixture: ComponentFixture<ContourPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContourPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContourPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
