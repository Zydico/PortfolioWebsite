import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPhysicsComponent } from './projects-physics.component';

describe('ProjectsPhysicsComponent', () => {
  let component: ProjectsPhysicsComponent;
  let fixture: ComponentFixture<ProjectsPhysicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPhysicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPhysicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
