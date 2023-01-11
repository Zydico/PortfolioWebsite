import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss']
})
export class ProjectBoxComponent implements OnInit {

  @Input()
  link: string;

  @Input()
  projectName: string;

  @Input()
  folder: string;

  image: string;

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {
    if (this.folder) {
      this.image = this.folder;
    } else {
      this.image = this.link;
    }
  }

  changePage(): void {
    if (this.link) {
      this.loader.showLoader();
      setTimeout(() => {
        this.router.navigate([this.link]);
        this.loader.hideLoader();
      }, 700);
    }
  }

}
