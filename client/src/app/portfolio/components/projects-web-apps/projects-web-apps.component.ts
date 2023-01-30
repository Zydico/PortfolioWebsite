import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-web-apps',
  templateUrl: './projects-web-apps.component.html',
  styleUrls: ['./projects-web-apps.component.scss', '../projects-page/projects.scss']
})
export class ProjectsWebAppsComponent implements OnInit {
 
  ngOnInit(): void {
    let element = document.getElementById('anchor');
    element.scrollIntoView();
  }
}
