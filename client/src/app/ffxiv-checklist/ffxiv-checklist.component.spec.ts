import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxivChecklistComponent } from './ffxiv-checklist.component';

describe('FfxivChecklistComponent', () => {
  let component: FfxivChecklistComponent;
  let fixture: ComponentFixture<FfxivChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfxivChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfxivChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
