import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-piano-pedal',
  templateUrl: './piano-pedal.component.html',
  styleUrls: ['./piano-pedal.component.scss']
})
export class PianoPedalComponent implements OnInit {

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}