import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {

  inAnimation: boolean = false;

  constructor(private router: Router, private loader: LoaderService) {
    router.events.subscribe(val => {
      this.addListenersToProjects();      
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  addListenersToProjects(): void {
    let projects = document.getElementsByClassName('project');
    for (let i = 0; i < projects.length; i++) {
      if (!projects[i].getAttribute('listener')) {
        let blur = <HTMLElement> projects[i].getElementsByClassName('blur')[0];
        let svg = <HTMLElement> projects[i].getElementsByClassName('project-description-svg')[0];
        let description = <HTMLElement> projects[i].getElementsByClassName('project-description')[0];
        let background = <HTMLElement> projects[i].getElementsByClassName('project-description-background')[0];
        if (blur) {
          blur.addEventListener('click', () => { this.showProject(description) });
        }
        if (svg) {
          svg.addEventListener('click', () => { this.hideProject(description) });
        }
        if (background) {
          background.addEventListener('click', () => { this.hideProject(description) });
        }
        projects[i].setAttribute('listener', 'true');
      }
    }
  }

  showProject(target: HTMLElement): void {
    if (this.inAnimation || !target) return;
    this.inAnimation = true;
    target.style.display = 'flex';
    setTimeout(() => {
      target.style.opacity = '1.0';
    }, 50);
    setTimeout(() => {
      this.inAnimation = false;
    }, 550);
  }

  hideProject(target: HTMLElement): void {
    if (this.inAnimation || !target) return;
    this.inAnimation = true;
    setTimeout(() => {
      target.style.opacity = '0.0';
    }, 50);
    setTimeout(() => {
      target.style.display = 'none';
      this.inAnimation = false;
    }, 550);
  }

  goBack(): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate(['portfolio']);
      this.loader.hideLoader();
    }, 700);
  }

  getRoute(): string {
    return this.router.url;
  }

}
