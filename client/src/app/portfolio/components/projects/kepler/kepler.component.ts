import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { Orbit } from './orbit';
import { Planet } from './planet';

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
  min_a: number = 1;
  max_a: number = 3;
  pixel_multiplier = 100;
  min_ratio: number = 0.5;
  max_ratio: number = 0.8;
  min_mass: number = 1;
  max_mass: number = 2;
  a: number = this.min_a;
  ratio: number;
  mass: number;
  time: string = '0.00';
  G: number = 6.6743 * 10 ** -11;

  variables = this.formBuilder.group({
    a: [(this.min_a + this.max_a) / 2, {validators: [Validators.min(this.min_a), Validators.max(this.max_a)]}],
    ratio: [(this.min_ratio + this.max_ratio) / 2, {validators: [Validators.min(this.min_ratio), Validators.max(this.max_ratio)]}],
    mass: [(this.min_mass + this.max_mass) / 2, {validators: [Validators.min(this.min_mass), Validators.max(this.max_mass)]}],
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
    this.a = this.getValue('a');
    this.ratio = this.getValue('ratio');
    this.time = '0.00';
    this.mass = this.getValue('mass');
  }

  getRadian(x, y) {
    return Math.atan2(y, x);
  }

  draw(): void {
    let ctx = this.ctx;
    let canvas = this.canvas;
    ctx.clearRect(-this.width * 3, -this.height * 3, this.width * 6, this.height * 6);
    let center_x = canvas.width / 2;
    let center_y = canvas.height / 2;

    let a = this.a;
    let a_canvas = a * this.pixel_multiplier;
    let ratio = this.ratio;
    let b_canvas = a_canvas * ratio;
    let b = a * ratio;
    let orbit_center_x = center_x;
    ctx.strokeStyle = 'rgb(250, 250, 250)'
    ctx.beginPath();
    ctx.ellipse(orbit_center_x, center_y, a_canvas, b_canvas, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    let sunRadius = 4;
    ctx.fillStyle = 'rgb(253, 184, 19)';
    ctx.beginPath();
    let sun_x = orbit_center_x + Math.sqrt(this.square(a) - this.square(b));
    ctx.arc(sun_x, center_y, sunRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    let mu = this.G * this.mass;
    let n = Math.sqrt(mu / Math.pow(a, 3));
    let M = n * Number(this.time);

    ctx.font = "12px Courier New";
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.fillText('t: ' + this.time + ' s', 10, 20);
    ctx.fillText('a: ' + a + ' m', 10, 40);
    ctx.fillText('b: ' + a * ratio + ' m', 10, 60);
    ctx.fillText('M: ' + M.toFixed(10) + ' rad' + ' / ' + Number(Number(M.toFixed(10)) * 180 / Math.PI).toFixed(10) + ' deg', 100, 20);


    // for (let i = 0; i < this.orbits.length; i++) {
    //   let orbit: Orbit = this.orbits[i];
    //   let planet: Planet = this.planets[i];
    //   orbit.centerX = sunX + Math.sqrt(this.square(orbit.major) - this.square(orbit.minor));
    //   orbit.centerY = sunY;
    //   ctx.strokeStyle = orbit.color;
    //   ctx.beginPath();
    //   ctx.ellipse(orbit.centerX, orbit.centerY, orbit.major, orbit.minor, 0, 0, 2 * Math.PI);
    //   ctx.stroke();
    //   ctx.closePath();

    //   if (!planet.x) {
    //     let x = this.getRandomDecimal(-orbit.major, orbit.major);
    //     let y = Math.sqrt(this.square(orbit.minor) - this.square(orbit.minor)*this.square(x)/(this.square(orbit.major)));
    //     let sign = this.getRandomInt(1, 3);
    //     if (sign == 2) {
    //       y = y * -1;
    //     }
    //     planet.x = orbit.centerX + x;
    //     planet.y = orbit.centerY + y;
    //   }
    //   ctx.fillStyle = orbit.color;
    //   ctx.beginPath();
    //   ctx.arc(planet.x, planet.y, 3, 0, Math.PI * 2);
    //   ctx.fill();
    //   ctx.closePath();
    // }
  }

  square(num) {
    return Math.pow(num, 2);
  }

  getValue(name) {
    return Number(this.variables.controls[name].value);
  }

  loop(): void {
    this.draw();
    this.time = Number((Number(this.time) + (1000 / 60 / 1000))).toFixed(2);
    window.requestAnimationFrame(() => this.loop());
  }

}