import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader/loader.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ffxiv-checklist',
  templateUrl: './ffxiv-checklist.component.html',
  styleUrls: ['./ffxiv-checklist.component.scss']
})
export class FfxivChecklistComponent implements OnInit {

  dailyTimer = {
    hours: '0',
    minutes: '0',
  }
  dailyGCTimer = {
    hours: '0',
    minutes: '0',
  }
  weeklyTimer = {
    days: '0',
    hours: '0',
    minutes: '0',
  }

  constructor(private router: Router, private loader: LoaderService, private cookieService: CookieService) { }

  ngOnInit(): void {
    setInterval(() => { this.getTime() }, 100);
  }

  getTime(): void {
    let now = new Date();
    let nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    let dailyReset = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 15, 0, 0);
    dailyReset.setDate(dailyReset.getDate() + 1);
    let difference = dailyReset.getTime() - nowUTC.getTime();
    this.dailyTimer.hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.dailyTimer.minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));
    
    let dailyGCReset = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 20, 0, 0);
    dailyGCReset.setDate(dailyReset.getDate() + 1);
    difference = dailyGCReset.getTime() - nowUTC.getTime();
    this.dailyGCTimer.hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.dailyGCTimer.minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));

    let weeklyReset = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + (7 - now.getUTCDay()) % 7 + 2, 8, 0, 0);
    difference = weeklyReset.getTime() - nowUTC.getTime();
    this.weeklyTimer.days = Math.floor((difference / (1000 * 60 * 60 * 24))).toString();
    this.weeklyTimer.hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.weeklyTimer.minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));
  }

  convertTime(time: number): string {
    let timeString = time.toString();
    if (time < 10) {
      timeString = `0${time}`;
    }
    return timeString;
  }

  goBack(): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate(['portfolio']);
      this.loader.hideLoader();
    }, 1200);
  }

}
