import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGamesComponent } from './projects-games.component';

describe('ProjectsGamesComponent', () => {
  let component: ProjectsGamesComponent;
  let fixture: ComponentFixture<ProjectsGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
