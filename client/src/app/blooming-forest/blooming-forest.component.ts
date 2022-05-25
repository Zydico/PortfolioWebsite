import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-blooming-forest',
  templateUrl: './blooming-forest.component.html',
  styleUrls: ['./blooming-forest.component.scss']
})
export class BloomingForestComponent implements OnInit {

  constructor(private router: Router, private loader: LoaderService) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    let list = document.getElementById('list');
    if (list) {
      let children = list.children.length;
      if (children < 10) {
        let element = document.createElement('li');
        if (event.key === 'ArrowDown') {
          element.innerHTML = 'Down';
        } else if (event.key === 'ArrowUp') {
          element.innerHTML = 'Up';    
        } else if (event.key === 'ArrowLeft') {
          element.innerHTML = 'Left';    
        } else if (event.key === 'ArrowRight') {
          element.innerHTML = 'Right';        
        }
        list.appendChild(element);
      }
    }
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate(['portfolio/games']).then(() => {
        let element = document.getElementById('projects-page');
        if (element) {
          element.scrollIntoView();
        }
      });
      this.loader.hideLoader();
    }, 700);
  }

  reset(): void {
    let list = document.getElementById('list');
    if (list) {
      var child = list.lastElementChild; 
      while (child) {
          list.removeChild(child);
          child = list.lastElementChild;
      }
    }
  }

}