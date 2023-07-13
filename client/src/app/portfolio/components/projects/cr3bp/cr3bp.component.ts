import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

@Component({
  selector: 'app-cr3bp',
  templateUrl: './cr3bp.component.html',
  styleUrls: ['./cr3bp.component.scss']
})
export class Cr3bpComponent implements OnInit {

  constructor(public loader: LoaderService) { 
  }

  createScript(source) {
    let element = document.getElementById(source);
    if (element) {
      element.remove();
    }
      
    let script = document.createElement('script');
    script.src = source;
    script.id = source;
    document.body.appendChild(script);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.createScript('./assets/Scripts/cr3bp.js');
  }

}