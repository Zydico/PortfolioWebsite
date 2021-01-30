import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsWebAppsComponent } from './projects-web-apps.component';

describe('ProjectsWebAppsComponent', () => {
  let component: ProjectsWebAppsComponent;
  let fixture: ComponentFixture<ProjectsWebAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsWebAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsWebAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
