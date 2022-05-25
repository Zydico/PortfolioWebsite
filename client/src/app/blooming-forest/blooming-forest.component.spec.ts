import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloomingForestComponent } from './blooming-forest.component';

describe('BloomingForestComponent', () => {
  let component: BloomingForestComponent;
  let fixture: ComponentFixture<BloomingForestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloomingForestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloomingForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
