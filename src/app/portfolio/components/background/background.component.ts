import { Component, OnInit, NgZone } from '@angular/core';
import { FileHandlerService } from 'src/app/portfolio/services/file-handler.service';
import { Star } from './star';
import { Line } from './line';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  polaris: Star;
  scale: number = 0;
  size = {
    width: 0,
    height: 0
  }
  rotation: number = 0;
  rotationSpeed: number = 0.001; 
  stars: {[index: string]: Star} = {};
  extraStars: Star[] = [];
  lines: Line[] = [];
  max: number = 600;
  mouse = {
    x: null,
    y: null
  }

  constructor(private fileHandlerService: FileHandlerService, private loaderService: LoaderService, private zone: NgZone) { }

  ngOnInit(): void {
    this.canvas = <HTMLCanvasElement> document.getElementById('background');
    this.ctx = this.canvas.getContext('2d');
    this.fileHandlerService.readFile('app/portfolio/components/background/stars.csv').subscribe((lines: string[]) => {
      this.parseData(lines);
      this.setCanvas();
      this.addMouseListener();
      window.requestAnimationFrame(() => this.loop());
      setTimeout(() => {this.loaderService.hideLoader()}, 1000);
    })
  }

  addMouseListener() {
    document.onmousemove = (event) => {
      this.mouse.x = (event.pageX - window.scrollX - this.size.width/2);
      this.mouse.y = (event.pageY - window.scrollY - this.size.height/2);
    }
  }

  parseData(lines: string[]): void {
    for (let i = 1; i < lines.length; i++) {
      let columns = lines[i].split(',');
      let star: Star = {id: columns[0], x: +columns[1], y: +columns[2], size: +columns[3], lineTo: columns[4]};
      if (columns[0].length > 0) {
        if (star.id === 'Polaris') {
          this.polaris = star;
        }
        this.stars[star.id.trim()] = star;
      } else {
        this.extraStars.push(star);
      }
    }
    for (let key in this.stars) {
      let star = this.stars[key];
      let lineTo = this.stars[key].lineTo.trim();
      if (lineTo.length > 0) {
        this.lines.push({x1: star.x, y1: star.y, x2: this.stars[lineTo].x, y2: this.stars[lineTo].y});
      }
    }
  }

  setCanvas(): void {
    this.size.width = this.canvas.offsetWidth;
    this.size.height = this.canvas.offsetHeight;
    this.canvas.width = this.size.width;
    this.canvas.height = this.size.height;
    this.scale = Math.max(this.size.width, this.size.height) / this.max * 1.1;
    this.ctx.translate(this.size.width / 2, this.size.height / 2);
    this.ctx.clearRect(-this.size.width * 2, -this.size.height * 2, this.size.width * 4, this.size.height * 4);
  }

  getDistance(x: number, y: number): number {
    return Math.pow(Math.pow(this.mouse.x - x, 2) + Math.pow(this.mouse.y - y, 2), 0.5);
  }

  draw(): void {
    let ctx = this.ctx;
    ctx.clearRect(-this.size.width * 3, -this.size.height * 3, this.size.width * 6, this.size.height * 6);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.rotate(this.rotationSpeed);
    this.rotation = (this.rotation + this.rotationSpeed) % (Math.PI * 2);
    for (let key in this.stars) {
      let star: Star = this.stars[key];
      ctx.beginPath();
      ctx.arc((star.x - this.polaris.x) * this.scale, (star.y - this.polaris.y) * this.scale, star.size * this.scale / 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
    if (this.mouse.x) {
      for (let line of this.lines) {
        let centerX = ((line.x1 - this.polaris.x) * this.scale + (line.x2 - this.polaris.x) * this.scale) / 2;
        let centerY = ((line.y1 - this.polaris.y) * this.scale + (line.y2 - this.polaris.y) * this.scale) / 2;
        let distance = Math.max(0.0, 1 - (this.getDistance((centerX) * Math.cos(this.rotation) - (centerY) * Math.sin(this.rotation), 
                                        (centerY) * Math.cos(this.rotation) + (centerX) * Math.sin(this.rotation)) / 250));
        ctx.globalAlpha = distance;
        ctx.beginPath();
        ctx.lineWidth = this.scale / 4;
        ctx.moveTo((line.x1 - this.polaris.x) * this.scale, (line.y1 - this.polaris.y) * this.scale);
        ctx.lineTo((line.x2 - this.polaris.x) * this.scale, (line.y2 - this.polaris.y) * this.scale);
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1.0;
      }
    }
  }

  loop(): void {
    if (this.size.width !== this.canvas.offsetWidth || this.size.height !== this.canvas.offsetHeight) {
      this.setCanvas();
    }
    this.draw();
    // Running outside of Angular to prevent unnecessary change detection
    this.zone.runOutsideAngular(() => {
      window.requestAnimationFrame(() => this.loop());
    })
  }

}
