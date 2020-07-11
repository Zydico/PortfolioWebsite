import { Component, OnInit } from '@angular/core';
import { ScrollHandlerService } from '../../services/scroll-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public scrollHandlerService : ScrollHandlerService) { }

  ngOnInit(): void {
    this.scrollHandlerService.updateScroll();
  }

  scrollTo(page: string): void {
    let element = document.getElementById(page + '-page');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
