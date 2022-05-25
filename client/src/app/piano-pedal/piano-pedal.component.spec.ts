import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoPedalComponent } from './piano-pedal.component';

describe('PianoPedalComponent', () => {
  let component: PianoPedalComponent;
  let fixture: ComponentFixture<PianoPedalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianoPedalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianoPedalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
