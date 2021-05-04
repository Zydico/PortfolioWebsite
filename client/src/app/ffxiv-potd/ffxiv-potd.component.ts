import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-ffxiv-potd',
  templateUrl: './ffxiv-potd.component.html',
  styleUrls: ['./ffxiv-potd.component.scss']
})
export class FfxivPotdComponent implements OnInit {

  mode: string = 'All';

  constructor(private router: Router, private loader: LoaderService) { }

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

  showHelp(): void {
    document.getElementById('help-info').style.display = 'block';
  }

  hideHelp(): void {
    document.getElementById('help-info').style.display = 'none';
  }

  radioChangeHandler(event: any) {
    this.mode = event.target.value;
  }

}
