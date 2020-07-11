import { Component, OnInit } from '@angular/core';
import { ScrollHandlerService } from '../../services/scroll-handler.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  constructor(public scrollHandlerService : ScrollHandlerService) { }

  ngOnInit(): void {
  }

  scroll(): void {
    let element = document.getElementById('about-page');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
