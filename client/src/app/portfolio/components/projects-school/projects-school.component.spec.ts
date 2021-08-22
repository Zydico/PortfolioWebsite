import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSchoolComponent } from './projects-school.component';

describe('ProjectsSchoolComponent', () => {
  let component: ProjectsSchoolComponent;
  let fixture: ComponentFixture<ProjectsSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
