import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfxivPotdComponent } from './ffxiv-potd.component';

describe('FfxivPotdComponent', () => {
  let component: FfxivPotdComponent;
  let fixture: ComponentFixture<FfxivPotdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfxivPotdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfxivPotdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
