import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeplerComponent } from './kepler.component';

describe('KeplerComponent', () => {
  let component: KeplerComponent;
  let fixture: ComponentFixture<KeplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
