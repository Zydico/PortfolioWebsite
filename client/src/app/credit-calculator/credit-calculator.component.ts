import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.scss']
})
export class CreditCalculatorComponent implements OnInit {

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