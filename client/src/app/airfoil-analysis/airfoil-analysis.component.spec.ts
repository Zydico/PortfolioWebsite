import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirfoilAnalysisComponent } from './airfoil-analysis.component';

describe('AirfoilAnalysisComponent', () => {
  let component: AirfoilAnalysisComponent;
  let fixture: ComponentFixture<AirfoilAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirfoilAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirfoilAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
