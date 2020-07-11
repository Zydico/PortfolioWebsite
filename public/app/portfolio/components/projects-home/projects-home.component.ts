import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.scss']
})
export class ProjectsHomeComponent implements OnInit {

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {
  }

  changePage(path: string): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate([path]);
      this.loader.hideLoader();
    }, 1200);
  }

}