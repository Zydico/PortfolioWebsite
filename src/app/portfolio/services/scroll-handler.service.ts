import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollHandlerService {

  isLocked = false;
  isOnTitle = true;
  isOnAbout = false;
  isOnSkills = false;
  isOnProjects = false;
  isOnContact = false;

  constructor() {
    window.onscroll = () => {
      this.updateScroll();
    }
  }

  private isOnPage(page: string): boolean {
    let element = document.getElementById(page + '-page');
    if (!element) return false;
    return window.scrollY >= element.offsetTop && window.scrollY < element.offsetTop + element.offsetHeight;
  }

  public updateScroll(): void {
    this.isOnTitle = this.isOnPage('title');
    this.isOnAbout = this.isOnPage('about');
    this.isOnSkills = this.isOnPage('skills');
    this.isOnProjects = this.isOnPage('projects');
    this.isOnContact = this.isOnPage('contact');
    let aboutPage = document.getElementById('about-page');
    let header = document.getElementById('header');
    if (window.scrollY < aboutPage.offsetTop) {
      this.isOnTitle = true;
      if (window.scrollY + header.offsetHeight > aboutPage.offsetTop) {
        this.isLocked = true;
        this.isOnTitle = false;
        this.isOnAbout = true;
      } else {
        this.isLocked = false;
      }
    } else {
      this.isLocked = true;
    }
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      this.isOnProjects = false;
      this.isOnContact = true;
    }
    this.checkClasses('transparent-right');
    this.checkClasses('transparent-left');
    this.checkClasses('transparent-top');
    let bars = document.getElementById('bar-container');
    if (bars && bars.offsetTop <= window.scrollY + 500) {
      let list = document.getElementsByClassName('minimized');
      for (let i = 0; i < list.length; i++) {
        let element = (<HTMLElement> list.item(i));
        setTimeout(() => { element.classList.remove('minimized') }, i * 150);
      }
    }
  }

  private checkClasses(className : string): void {
    let list = document.getElementsByClassName(className);
    for (let i = 0; i < list.length; i++) {
      let element = (<HTMLElement> list.item(i));
      if (element.offsetTop <= window.scrollY + 500) {
        element.classList.remove(className);
      }
    }
  }
  
}
