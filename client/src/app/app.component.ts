import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle('Matthew Hwang\'s Portfolio Website');
    this.metaService.addTags([
      {name: 'keywords', content: 'Portfolio, Website, Matthew, Hwang, Aerospace, Mechanical, Engineering, Student'},
      {name: 'description', content: 'Matthew Hwang\'s Portfolio Website'},
      {name: 'robots', content: 'index, follow'},
      {name: 'og:image', content: 'assets/CoverImage.png'}
    ]);
  }
}
