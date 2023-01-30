import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-paper-airplane',
  templateUrl: './paper-airplane.component.html',
  styleUrls: ['./paper-airplane.component.scss']
})
export class PaperAirplaneComponent implements OnInit {

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
