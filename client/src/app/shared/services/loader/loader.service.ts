import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private router: Router) { }
  
  showLoader() {
    document.getElementById('loader').style.top = '0%';
  }
  
  hideLoader() {
    document.getElementById('loader').style.top = '100%';
  }

  changePage(path: string): void {
    this.showLoader();
    setTimeout(() => {
      if (path == 'portfolio/school') {
        this.router.navigate(['portfolio/school']).then(() => {
          let element = document.getElementById('projects-page');
          if (element) {
            element.scrollIntoView();
          }
        });
        this.hideLoader();
      } else {
        this.router.navigate([path]);
        this.hideLoader();
      }
    }, 700);
  }
}
