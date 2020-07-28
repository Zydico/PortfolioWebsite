import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAlgorithmVisualizerComponent } from './sort-algorithm-visualizer.component';

describe('SortAlgorithmVisualizerComponent', () => {
  let component: SortAlgorithmVisualizerComponent;
  let fixture: ComponentFixture<SortAlgorithmVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortAlgorithmVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortAlgorithmVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
