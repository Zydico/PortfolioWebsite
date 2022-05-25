import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalsaWoodGliderComponent } from './balsa-wood-glider.component';

describe('BalsaWoodGliderComponent', () => {
  let component: BalsaWoodGliderComponent;
  let fixture: ComponentFixture<BalsaWoodGliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalsaWoodGliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalsaWoodGliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
