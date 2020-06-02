import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {

  inAnimation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    let projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
      let blur = <HTMLElement> projects[0].getElementsByClassName('blur')[0];
      let svg = <HTMLElement> projects[0].getElementsByClassName('project-description-svg')[0];
      let description = <HTMLElement> projects[0].getElementsByClassName('project-description')[0];
      let background = <HTMLElement> projects[0].getElementsByClassName('project-description-background')[0];
      blur.addEventListener('click', () => { this.showProject(description) });
      svg.addEventListener('click', () => { this.hideProject(description) });
      background.addEventListener('click', () => { this.hideProject(description) });
    }
  }

  showProject(target: HTMLElement): void {
    if (this.inAnimation) return;
    this.inAnimation = true;
    target.style.display = 'flex';
    setTimeout(() => {
      target.style.opacity = '1.0';
    }, 50);
    setTimeout(() => {
      this.inAnimation = false;
    }, 1000);
  }

  hideProject(target: HTMLElement): void {
    target.style.opacity = '0.0';
    setTimeout(() => {
      target.style.display = 'none';
    }, 1000);
  }

}
