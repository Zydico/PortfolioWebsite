import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWorstComponent } from './best-worst.component';

describe('BestWorstComponent', () => {
  let component: BestWorstComponent;
  let fixture: ComponentFixture<BestWorstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestWorstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestWorstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
