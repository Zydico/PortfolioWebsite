import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-balsa-wood-glider',
  templateUrl: './balsa-wood-glider.component.html',
  styleUrls: ['./balsa-wood-glider.component.scss']
})
export class BalsaWoodGliderComponent implements OnInit {

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}