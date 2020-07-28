import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  
  showLoader() {
    document.getElementById('loader').style.top = '0%';
  }
  
  hideLoader() {
    document.getElementById('loader').style.top = '100%';
  }
}
