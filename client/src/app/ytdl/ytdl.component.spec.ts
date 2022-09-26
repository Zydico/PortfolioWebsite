import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtdlComponent } from './ytdl.component';

describe('YtdlComponent', () => {
  let component: YtdlComponent;
  let fixture: ComponentFixture<YtdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
