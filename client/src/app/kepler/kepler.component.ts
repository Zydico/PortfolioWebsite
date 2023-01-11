import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoaderService } from '../shared/services/loader/loader.service';
import { Orbit } from './orbit';

@Component({
  selector: 'app-kepler',
  templateUrl: './kepler.component.html',
  styleUrls: ['./kepler.component.scss']
})
export class KeplerComponent implements OnInit {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number = 0;
  height: number = 0;
  orbits: Orbit[] = [];
  currentRatio: number = 1.25;
  
  variables = this.formBuilder.group({
    planets: 1,
    ratio: 1.25,
  });

  constructor(public loader: LoaderService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.canvas = <HTMLCanvasElement> document.getElementById('simulation');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.offsetWidth;
    this.height = this.canvas.offsetHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.onSubmit();
    window.requestAnimationFrame(() => this.loop());
  }

  onSubmit(): void {

    let newRatio = this.variables.get('ratio');
    if (newRatio.value < 1) {
      newRatio.setValue(1);
    } else if (newRatio.value > 2) {
      newRatio.setValue(2);
    }
    
    let newPlanets = this.variables.get('planets');
    if (newPlanets.value < 1) {
      newPlanets.setValue(1);
    } else if (newPlanets.value > 10) {
      newPlanets.setValue(10);
    }
    

    this.orbits = [];
    this.currentRatio = Number(this.variables.get('ratio').value);
    let lastMajor = 0;
    let lastMinor = 0;
    for (let i = 0; i < this.getField('planets'); i++) {
      let orbit = {} as Orbit;
      let r = this.getRandomInt(50, 255);
      let g = this.getRandomInt(50, 255);
      let b = this.getRandomInt(50, 255);
      orbit.color = `rgb(${r}, ${g}, ${b})`;
      if (i == 0) {
        orbit.gap = 30;
      } else {
        orbit.gap = this.getRandomInt(30, 60);
      }
      lastMinor = lastMinor + orbit.gap;
      lastMajor = lastMinor * this.currentRatio;
      orbit.major = lastMajor;
      orbit.minor = lastMinor;
      this.orbits.push(orbit);
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  draw(): void {
    let ctx = this.ctx;
    let canvas = this.canvas;
    ctx.clearRect(-this.width * 3, -this.height * 3, this.width * 6, this.height * 6);
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let sunRadius = 3;
    ctx.fillStyle = 'rgb(253, 184, 19)';
    ctx.beginPath();
    let sunX = centerX - centerX / 3;
    let sunY = centerY;
    ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    for (let i = 0; i < this.orbits.length; i++) {
      let orbit: Orbit = this.orbits[i];
      orbit.centerX = sunX + Math.sqrt(Math.pow(orbit.major^2, 2) - Math.pow(orbit.minor^2, 2));
      orbit.centerY = sunY;
      ctx.strokeStyle = orbit.color;
      ctx.beginPath();
      ctx.ellipse(orbit.centerX, orbit.centerY, orbit.major, orbit.minor, 0, 0, 2 * Math.PI);
      console.log(sunX);
      console.log(orbit.centerX);
      console.log(orbit.centerX - sunX);
      console.log(orbit.major);
      console.log(orbit.minor);
      ctx.stroke();
    }
  }

  getField(field) {
    return Number(this.variables.get(field).value);
  }

  loop(): void {
    this.draw();
    window.requestAnimationFrame(() => this.loop());
  }

}