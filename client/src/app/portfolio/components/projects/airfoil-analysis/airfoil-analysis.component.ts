import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-airfoil-analysis',
  templateUrl: './airfoil-analysis.component.html',
  styleUrls: ['./airfoil-analysis.component.scss']
})
export class AirfoilAnalysisComponent implements OnInit {

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}