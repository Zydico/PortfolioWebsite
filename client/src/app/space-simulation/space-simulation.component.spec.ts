import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSimulationComponent } from './space-simulation.component';

describe('SpaceSimulationComponent', () => {
  let component: SpaceSimulationComponent;
  let fixture: ComponentFixture<SpaceSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
