import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoaderService } from '../../../../shared/services/loader/loader.service';

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
  min_a: number = 0.5;
  max_a: number = 3;
  min_speed: number = 500000;
  max_speed: number = 10000000;
  min_eccentricity: number = 0;
  max_eccentricity: number = 0.9;
  scale: number = 1/1495980000;
  a: number = 1;
  eccentricity: number = (this.min_eccentricity + this.max_eccentricity)/2;
  sun_mass: number = 1.989 * 10 ** 30;
  time: string = '0.00';
  G: number = 6.6743 * 10 ** -11;
  AU: number = 1.496 * 10 ** 11;
  speed: number = this.min_speed;
  rad_decimals: number = 10;

  variables = this.formBuilder.group({
    a: [1, {validators: [Validators.required, Validators.min(this.min_a), Validators.max(this.max_a)]}],
    eccentricity: [0.7, {validators: [Validators.required, Validators.min(this.min_eccentricity),Validators.max(this.max_eccentricity)]}],
    speed: [this.max_speed, {validators: [Validators.required, Validators.min(this.min_speed),Validators.max(this.max_speed)]}],
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
    if (!this.variables.controls['a'].errors && !this.variables.controls['eccentricity'].errors && !this.variables.controls['speed'].errors) {
      this.a = this.getValue('a');
      this.eccentricity = this.getValue('eccentricity');
      this.speed = this.getValue('speed');
      this.time = '0.00';
    }
  }

  getRadian(x: number, y: number) {
    return Math.atan2(y, x);
  }

  draw(): void {
    let ctx = this.ctx;
    let canvas = this.canvas;
    ctx.clearRect(-this.width * 3, -this.height * 3, this.width * 6, this.height * 6);
    let center_x = canvas.width / 2;
    let center_y = canvas.height / 2;

    let a = this.a;
    let b = Math.sqrt(-this.square(a) * (this.square(this.eccentricity) - 1));
    let a_canvas = a * this.AU * this.scale;
    let b_canvas = b * this.AU * this.scale;
    let orbit_center_x = center_x;

    // ellipse
    ctx.strokeStyle = 'rgb(250, 250, 250)'
    ctx.beginPath();
    ctx.ellipse(orbit_center_x, center_y, a_canvas, b_canvas, 0, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    // outer circle
    ctx.strokeStyle = 'rgb(255,99,71)';
    ctx.beginPath();
    ctx.arc(orbit_center_x, center_y, a_canvas, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    let sun_x = orbit_center_x + Math.sqrt(this.square(a_canvas) - this.square(b_canvas));

    let mu = this.G * this.sun_mass;
    let period = 2 * Math.PI * Math.sqrt(Math.pow(a * this.AU, 3)/mu);
    let n = Math.sqrt(mu / Math.pow(a * this.AU, 3));
    let M = n * Number(this.time);
    let e = this.eccentricity;

    let E0 = M;
    let Ek = E0;
    let E_next = Ek - (Ek - e*Math.sin(Ek) - E0) / (1 - e*Math.cos(Ek));
    while ((Math.abs(E_next - Ek) >= 0.001) || Math.abs(Ek - e*Math.sin(Ek) - M) >= 0.001) {
      Ek = E_next;
      E_next = Ek - (Ek - e*Math.sin(Ek) - E0) / (1 - e*Math.cos(Ek));
    }
    let f = 2 * Math.atan(Math.sqrt((1+e)/(1-e)) * Math.tan(Ek/2));
    let r = a * (1 - e * Math.cos(Ek));

    let planet_x = sun_x + r * Math.cos(f) * this.AU * this.scale;
    let planet_y = center_y + r * Math.sin(-f) * this.AU * this.scale;
    let rp = a * (1 - e);
    let ra = a * (1 + e);

    M = M % (2 * Math.PI);
    Ek = Ek % (2 * Math.PI);

    let anomalyRadius = 3;

    // Eccentric Anomaly Circle
    let eccentric_anomaly_x = center_x + a_canvas * Math.cos(Ek);
    let eccentric_anomaly_y = center_y - a_canvas * Math.sin(Ek);
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,255,0)';
    ctx.arc(eccentric_anomaly_x, eccentric_anomaly_y, anomalyRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Eccentric Anomaly Line
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255,255,0)';
    ctx.moveTo(center_x, center_y);
    ctx.lineTo(eccentric_anomaly_x, eccentric_anomaly_y);
    ctx.stroke();
    ctx.closePath();

    // Eccentric Anomaly Line 2
    ctx.beginPath();
    ctx.moveTo(eccentric_anomaly_x, eccentric_anomaly_y);
    ctx.lineTo(planet_x, planet_y);
    ctx.stroke();

    // Eccentric Anomaly Angle
    ctx.beginPath();
    ctx.arc(center_x, center_y, 20, 0, -Ek, true);
    ctx.stroke();
    ctx.font = "12px Courier New";
    ctx.fillText('E', center_x + 20, center_y - 20);

    // Mean Anomaly Circle
    let mean_anomaly_x = center_x + a_canvas * Math.cos(M);
    let mean_anomaly_y = center_y - a_canvas * Math.sin(M);
    ctx.beginPath();
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.arc(mean_anomaly_x, mean_anomaly_y, anomalyRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // Mean Anomaly Line
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.moveTo(center_x, center_y);
    ctx.lineTo(mean_anomaly_x, mean_anomaly_y);
    ctx.stroke();

    // Mean Anomaly Angle
    ctx.beginPath();
    ctx.arc(center_x, center_y, 10, 0, -M, true);
    ctx.stroke();
    ctx.fillText('M', center_x + 10, center_y - 10);

    // rp
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(255, 204, 203)'
    ctx.fillStyle = 'rgb(255, 204, 203)'
    ctx.moveTo(sun_x, center_y);
    ctx.lineTo(sun_x + rp * this.AU * this.scale, center_y);
    ctx.stroke();
    ctx.fillText('r', sun_x + rp * this.AU * this.scale / 2, center_y + 10);
    ctx.font = "10px Courier New";
    ctx.fillText('p', sun_x + rp * this.AU * this.scale / 2 + 6, center_y + 12);

    // ra
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(0,250,154)'
    ctx.fillStyle = 'rgb(0,250,154)'
    ctx.moveTo(sun_x, center_y);
    ctx.lineTo(sun_x - ra * this.AU * this.scale, center_y);
    ctx.stroke();
    ctx.font = "12px Courier New";
    ctx.fillText('r', sun_x - ra * this.AU * this.scale / 2, center_y + 10);
    ctx.font = "10px Courier New";
    ctx.fillText('a', sun_x - ra * this.AU * this.scale / 2 + 6, center_y + 12);

    // r
    ctx.beginPath();
    ctx.strokeStyle = 'rgb(230,230,250)'
    ctx.fillStyle = 'rgb(230,230,250)'
    ctx.moveTo(sun_x, center_y);
    ctx.lineTo(planet_x, planet_y);
    ctx.stroke();
    ctx.font = "12px Courier New";
    ctx.fillText('r', (sun_x + planet_x)/2, (center_y + planet_y)/2);
    
    // True Anomaly Angle
    ctx.beginPath();
    ctx.arc(sun_x, center_y, 10, 0, -f, true);
    ctx.stroke();
    ctx.font = "12px Courier New";
    ctx.fillText('f', sun_x + 10, center_y - 10);

    // sun
    ctx.beginPath();
    let sunRadius = 6;
    ctx.fillStyle = 'rgb(253, 184, 19)';
    ctx.arc(sun_x, center_y, sunRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // planet
    let planetRadius = 4;
    ctx.beginPath();
    ctx.fillStyle = 'rgb(230,230,250)';
    ctx.arc(planet_x, planet_y, planetRadius, 0, Math.PI * 2);
    ctx.fill();

    // texts
    let fText = f;
    if (f < 0) {
      fText = 2 * Math.PI + f;
    }

    if (Number(this.time) > period) {
      this.time = String(Number(this.time) - period);
    }

    ctx.font = "12px Courier New";
    ctx.fillStyle = 'rgb(250, 250, 250)'
    ctx.fillText('Speed: ' + this.speed + 'x', 10, 20);
    ctx.fillText('t: ' + this.time + ' s', 10, 40);
    ctx.fillText('T: ' + period.toFixed(2) + ' s', 10, 60);
    ctx.fillText('a: ' + a.toFixed(4) + ' AU', 10, 80);
    ctx.fillText('b: ' + b.toFixed(4) + ' AU', 10, 100);
    ctx.fillText('r: ' + r.toFixed(4) + ' AU', 10, 120);
    ctx.fillText('e: ' + e, 10, 140);
    ctx.fillText('M: ' + M.toFixed(this.rad_decimals) + ' rad' + ' / ' + Number(Number(M.toFixed(this.rad_decimals)) * 180 / Math.PI).toFixed(this.rad_decimals) + ' deg', 180, 20);
    ctx.fillText('E: ' + Ek.toFixed(this.rad_decimals) + ' rad' + ' / ' + Number(Number(Ek.toFixed(this.rad_decimals)) * 180 / Math.PI).toFixed(this.rad_decimals) + ' deg', 180, 40);
    ctx.fillText('f: ' + fText.toFixed(this.rad_decimals) + ' rad' + ' / ' + Number(Number(fText.toFixed(this.rad_decimals)) * 180 / Math.PI).toFixed(this.rad_decimals) + ' deg', 180, 60);

    ctx.fillText('t: Time of Flight', 10, this.height - 220);
    ctx.fillText('T: Period', 10, this.height - 200);
    ctx.fillText('a: Semi-major Axis', 10, this.height - 180);
    ctx.fillText('b: Semi-minor Axis', 10, this.height - 160);
    ctx.fillText('e: Eccentricity', 10, this.height - 140);
    ctx.fillText('E: Eccentric Anomaly', 10, this.height - 120);
    ctx.fillText('M: Mean Anomaly', 10, this.height - 100);
    ctx.fillText('f: True Anomaly', 10, this.height - 80);
    ctx.fillText('ra: Apoapsis Radius', 10, this.height - 60);
    ctx.fillText('rp: Periapsis Radius', 10, this.height - 40);
    ctx.fillText('r: Satellite Distance Radius', 10, this.height - 20);
  }

  square(num) {
    return Math.pow(num, 2);
  }

  getValue(name) {
    return Number(this.variables.controls[name].value);
  }

  loop(): void {
    this.draw();
    this.time = Number((Number(this.time) + (1000 / 60 / 1000 * this.speed))).toFixed(2);
    window.requestAnimationFrame(() => this.loop());
  }

}