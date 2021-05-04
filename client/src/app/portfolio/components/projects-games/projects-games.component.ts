import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';

@Component({
  selector: 'app-projects-games',
  templateUrl: './projects-games.component.html',
  styleUrls: ['./projects-games.component.scss', '../projects-page/projects.scss']
})
export class ProjectsGamesComponent implements OnInit {

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {
  }

  changePage(path: string): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate([path]);
      this.loader.hideLoader();
    }, 700);
  }

}
