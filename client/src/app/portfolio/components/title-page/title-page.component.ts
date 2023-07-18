import { Component, OnInit } from '@angular/core';
import { ScrollHandlerService } from '../../services/scroll-handler.service';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  
  private images = [
                    "assets/Images/CoverImage.png",
                    "assets/Images/Folder-Blue.png",
                    "assets/Images/Folder-Orange.png",
                    "assets/Images/Folder-Pink.png",
                    "assets/Images/Matlab.jpg",
                    "assets/Images/Sort.png",
                    "assets/Images/Locations/Morgantown.png",
                    "assets/Images/Locations/SouthKorea.png",
                    "assets/Images/Locations/Washington.png",
                    "assets/Images/Locations/WestVirginia.png",
                    "assets/Images/MAE_211_Project/Img1.jpg",
                    "assets/Images/MAE_211_Project/Img2.jpg",
                    "assets/Images/MAE_211_Project/Img3.jpg",
                    "assets/Images/MAE_211_Project/Img4.jpg",
                    "assets/Images/MAE_215_Project/Img1.jpg",
                    "assets/Images/MAE_215_Project/Img2.jpg",
                    "assets/Images/MAE_215_Project/Img3.jpg",
                    "assets/Images/MAE_215_Project/Img4.jpg",
                    "assets/Images/MAE_215_Project/Img5.jpg",
                    "assets/Images/MAE_335_Project/AirfoilAnalysis.jpg",
                    "assets/Images/MAE_335_Project/Img1.jpg",
                    "assets/Images/MAE_335_Project/Img2.jpg",
                    "assets/Images/MAE_335_Project/Img3.jpg",
                    "assets/Images/Kepler_Project/Thumbnail.png",
                    "assets/Images/Research/cr3bp.jpg",
                    "assets/Images/Research/SDA.png",
                    "assets/Images/Research/Satellites.png",
                    "assets/Images/Research/FOV.png",
                   ];

  constructor(public scrollHandlerService : ScrollHandlerService) { }

  ngOnInit(): void {
    this.preload();
  }
  
  preload(): void {
    let container = document.getElementById('preload');
    if (container && !container.firstChild) {
      for (let i = 0; i < this.images.length; i++){
        let img = new Image();
        img.src = this.images[i];
        img.style.position = 'absolute';
        img.style.left = '99999';
        img.style.width = '0';
        img.style.height = '0';
        img.style.overflow = 'hidden';
        img.style.zIndex = '-1';
        container.appendChild(img);
      }
    }
  }

  scroll(): void {
    let element = document.getElementById('about-page');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
