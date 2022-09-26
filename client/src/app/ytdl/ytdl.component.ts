import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-ytdl',
  templateUrl: './ytdl.component.html',
  styleUrls: ['./ytdl.component.scss']
})
export class YtdlComponent implements OnInit {
  url = new FormControl('');

  constructor(private router: Router, private loader: LoaderService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate(['portfolio/school']).then(() => {
        let element = document.getElementById('projects-page');
        if (element) {
          element.scrollIntoView();
        }
      });
      this.loader.hideLoader();
    }, 700);
  }

}
