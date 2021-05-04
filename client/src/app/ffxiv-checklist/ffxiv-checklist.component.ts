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
  manualTimers = {
    treasureMapTimer: null,
    gcSquadronTimer: null,
  }

  constructor(private router: Router, private loader: LoaderService, private cookieService: CookieService) { }

  ngOnInit(): void {
    let roulettes = (<HTMLInputElement> document.getElementById('roulettes'));
    let minicactpot = (<HTMLInputElement> document.getElementById('mini-cactpot'));
    let beasttribes = (<HTMLInputElement> document.getElementById('beast-tribes'));
    let gcturnins = (<HTMLInputElement> document.getElementById('gc-turnins'));
    let map = (<HTMLInputElement> document.getElementById('map'));
    let squadron = (<HTMLInputElement> document.getElementById('squadron'));
    let raids = (<HTMLInputElement> document.getElementById('raids'));
    let tomestones = (<HTMLInputElement> document.getElementById('tomestones'));
    let customdeliveries = (<HTMLInputElement> document.getElementById('custom-deliveries'));
    let jumbocactpot = (<HTMLInputElement> document.getElementById('jumbo-cactpot'));
    let wondroustails = (<HTMLInputElement> document.getElementById('wondrous-tails'));
    let fashionreport = (<HTMLInputElement> document.getElementById('fashion-report'));
    let maskedcarnivale = (<HTMLInputElement> document.getElementById('masked-carnivale'));
    let domanenclave = (<HTMLInputElement> document.getElementById('doman-enclave'));
    let fauxhollows = (<HTMLInputElement> document.getElementById('faux-hollows'));
    let allianceraid = (<HTMLInputElement> document.getElementById('alliance-raid'));
    roulettes.checked = this.getCookie('ffxiv-roulettes') === 'true';
    minicactpot.checked = this.getCookie('ffxiv-minicactpot') === 'true';
    beasttribes.checked = this.getCookie('ffxiv-beasttribes') === 'true';
    gcturnins.checked = this.getCookie('ffxiv-gcturnins') === 'true';
    map.checked = this.getCookie('ffxiv-map') === 'true';
    squadron.checked = this.getCookie('ffxiv-squadron') === 'true';
    raids.checked = this.getCookie('ffxiv-raids') === 'true';
    tomestones.checked = this.getCookie('ffxiv-tomestones') === 'true';
    customdeliveries.checked = this.getCookie('ffxiv-customdeliveries') === 'true';
    jumbocactpot.checked = this.getCookie('ffxiv-jumbocactpot') === 'true';
    wondroustails.checked = this.getCookie('ffxiv-wondroustails') === 'true';
    fashionreport.checked = this.getCookie('ffxiv-fashionreport') === 'true';
    maskedcarnivale.checked = this.getCookie('ffxiv-maskedcarnivale') === 'true';
    domanenclave.checked = this.getCookie('ffxiv-domanenclave') === 'true';
    fauxhollows.checked = this.getCookie('ffxiv-fauxhollows') === 'true';
    allianceraid.checked = this.getCookie('ffxiv-allianceraid') === 'true';
    if (this.getCookie('ffxiv-treasuremaptimer') && this.getCookie('ffxiv-treasuremaptimer') !== 'null') {
      this.manualTimers.treasureMapTimer = new Date(this.getCookie('ffxiv-treasuremaptimer'));
    }
    if (this.getCookie('ffxiv-squadrontimer') && this.getCookie('ffxiv-squadrontimer') !== 'null') {
      this.manualTimers.gcSquadronTimer = new Date(this.getCookie('ffxiv-squadrontimer'));
    }
    setInterval(() => { this.getTime() }, 100);
  }

  getTime(): void {
    let now = new Date();
    let nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    let dailyReset = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 15, 0, 0);
    let difference = dailyReset.getTime() - nowUTC.getTime();
    if (difference < 0) {
      dailyReset.setDate(nowUTC.getDate() + 1);
      difference = dailyReset.getTime() - nowUTC.getTime();
    }
    this.dailyTimer.hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.dailyTimer.minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));
    
    let dailyGCReset = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 20, 0, 0);
    difference = dailyGCReset.getTime() - nowUTC.getTime();
    if (difference < 0) {
      dailyGCReset.setDate(nowUTC.getDate() + 1);
      difference = dailyGCReset.getTime() - nowUTC.getTime();
    }
    this.dailyGCTimer.hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.dailyGCTimer.minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));

    let weeklyReset = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + ((7 - now.getUTCDay()) + 2) % 7, 8, 0, 0);
    difference = weeklyReset.getTime() - nowUTC.getTime();
    if (difference < 0) {
      weeklyReset.setDate(weeklyReset.getDate() + 7);
      difference = weeklyReset.getTime() - nowUTC.getTime();
    }
    this.weeklyTimer.days = Math.floor((difference / (1000 * 60 * 60 * 24))).toString();
    this.weeklyTimer.hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    this.weeklyTimer.minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));

    this.getManualTimeDifference(this.manualTimers.treasureMapTimer);
    this.getManualTimeDifference(this.manualTimers.gcSquadronTimer);

    let roulettes = (<HTMLInputElement> document.getElementById('roulettes'));
    let minicactpot = (<HTMLInputElement> document.getElementById('mini-cactpot'));
    let beasttribes = (<HTMLInputElement> document.getElementById('beast-tribes'));
    let gcturnins = (<HTMLInputElement> document.getElementById('gc-turnins'));
    let map = (<HTMLInputElement> document.getElementById('map'));
    let squadron = (<HTMLInputElement> document.getElementById('squadron'));
    let raids = (<HTMLInputElement> document.getElementById('raids'));
    let tomestones = (<HTMLInputElement> document.getElementById('tomestones'));
    let customdeliveries = (<HTMLInputElement> document.getElementById('custom-deliveries'));
    let jumbocactpot = (<HTMLInputElement> document.getElementById('jumbo-cactpot'));
    let wondroustails = (<HTMLInputElement> document.getElementById('wondrous-tails'));
    let fashionreport = (<HTMLInputElement> document.getElementById('fashion-report'));
    let maskedcarnivale = (<HTMLInputElement> document.getElementById('masked-carnivale'));
    let domanenclave = (<HTMLInputElement> document.getElementById('doman-enclave'));
    let fauxhollows = (<HTMLInputElement> document.getElementById('faux-hollows'));
    let allianceraid = (<HTMLInputElement> document.getElementById('alliance-raid'));

    let ffxivDailyReset = new Date(this.getCookie('ffxiv-dailyReset'));
    if (!ffxivDailyReset || (ffxivDailyReset && nowUTC > ffxivDailyReset)) {
      this.setCookie('ffxiv-dailyReset', dailyReset, 7);
      roulettes.checked = false;
      minicactpot.checked = false;
      beasttribes.checked = false;
    }
    let ffxivGCReset = new Date(this.getCookie('ffxiv-gcreset'));
    if (!ffxivGCReset || (ffxivGCReset && nowUTC > ffxivGCReset)) {
      this.setCookie('ffxiv-gcreset', dailyGCReset, 7);
      gcturnins.checked = false;
    }

    let ffxivWeeklyReset = new Date(this.getCookie('ffxiv-weeklyReset'));
    if (!ffxivWeeklyReset || (ffxivWeeklyReset && nowUTC > ffxivWeeklyReset)) {
      this.setCookie('ffxiv-weeklyReset', weeklyReset, 7);
      raids.checked = false;
      tomestones.checked = false;
      customdeliveries.checked = false;
      jumbocactpot.checked = false;
      wondroustails.checked = false;
      fashionreport.checked = false;
      maskedcarnivale.checked = false;
      domanenclave.checked = false;
      fauxhollows.checked = false;
      allianceraid.checked = false;
    }

    if (this.manualTimers.treasureMapTimer && nowUTC > this.manualTimers.treasureMapTimer) {
      this.manualTimers.treasureMapTimer = null;
      map.checked = false;
    }
    if (this.manualTimers.gcSquadronTimer && nowUTC > this.manualTimers.gcSquadronTimer) {
      this.manualTimers.gcSquadronTimer = null;
      squadron.checked = false;
    }

    if (roulettes) {
      this.setCookie('ffxiv-roulettes', roulettes.checked, 7);
      this.setCookie('ffxiv-minicactpot', minicactpot.checked, 7);
      this.setCookie('ffxiv-beasttribes', beasttribes.checked, 7);
      this.setCookie('ffxiv-gcturnins', gcturnins.checked, 7);
      this.setCookie('ffxiv-map', map.checked, 7);
      this.setCookie('ffxiv-squadron', squadron.checked, 7);
      this.setCookie('ffxiv-raids', raids.checked, 7);
      this.setCookie('ffxiv-tomestones', tomestones.checked, 7);
      this.setCookie('ffxiv-customdeliveries', customdeliveries.checked, 7);
      this.setCookie('ffxiv-jumbocactpot', jumbocactpot.checked, 7);
      this.setCookie('ffxiv-wondroustails', wondroustails.checked, 7);
      this.setCookie('ffxiv-fashionreport', fashionreport.checked, 7);
      this.setCookie('ffxiv-maskedcarnivale', maskedcarnivale.checked, 7);
      this.setCookie('ffxiv-domanenclave', domanenclave.checked, 7);
      this.setCookie('ffxiv-fauxhollows', fauxhollows.checked, 7);
      this.setCookie('ffxiv-allianceraid', allianceraid.checked, 7);
  
      this.setCookie('ffxiv-treasuremaptimer', this.manualTimers.treasureMapTimer, 7);
      this.setCookie('ffxiv-squadrontimer', this.manualTimers.gcSquadronTimer, 7);
    }
  }

  setCookie(cname, cvalue, exdays): void {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  getCookie(cname): string {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  getManualTimeDifference(timer: Date): string {
    if (!timer) return null;
    let now = new Date();
    let nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    let difference = timer.getTime() - nowUTC.getTime();
    let hours = this.convertTime(Math.floor((difference / (1000 * 60 * 60)) % 24));
    let minutes = this.convertTime(Math.floor((difference / (1000 * 60)) % 60));
    return `${hours} Hours and ${minutes} Minutes`;
  }

  convertTime(time: number): string {
    let timeString = time.toString();
    return timeString;
  }

  goBack(): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate(['portfolio/games']).then(() => {
        let element = document.getElementById('projects-page');
        if (element) {
          element.scrollIntoView();
        }
      });
      this.loader.hideLoader();
    }, 700);
  }

  checkTimer(input: HTMLInputElement, type: string) {
    if (input.checked) {
      let now = new Date();
      let nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
      nowUTC.setHours(nowUTC.getHours() + 18);
      if (type === 'map') {
        this.manualTimers.treasureMapTimer = nowUTC;
      } else if (type === 'squadron') {
        this.manualTimers.gcSquadronTimer = nowUTC;
      }
    } else {
      if (type === 'map') {
        this.manualTimers.treasureMapTimer = null;
        this.setCookie('ffxiv-treasuremaptimer', null, 7);
      } else if (type === 'squadron') {
        this.manualTimers.gcSquadronTimer = null;
        this.setCookie('ffxiv-squadrontimer', null, 7);
      }
    }
    this.getManualTimeDifference(this.manualTimers.treasureMapTimer);
    this.getManualTimeDifference(this.manualTimers.gcSquadronTimer);
  }

}
