import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  
  hideLoader() {
    document.getElementById('loader').style.top = '100%';
  }
}
