import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-best-worst',
  templateUrl: './best-worst.component.html',
  styleUrls: ['./best-worst.component.scss']
})
export class BestWorstComponent implements OnInit, AfterViewInit {
  private canvas;
  private scale = 2;
  private dimensions = [470.66666*this.scale, 272*this.scale];
  private origin = [this.dimensions[0]/2, this.dimensions[1]/2];
  private placeholders = [];

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    // Setting up canvas element
    let canvas = new fabric.Canvas('c');
    this.canvas = canvas;
    canvas.setDimensions({width: this.dimensions[0], height: this.dimensions[1]});
    this.draw();
    canvas.renderAll();
  }

  draw(): void {
    let blue_line = {
      stroke: 'black',
      strokeWidth: 1,
      originX: 'center',
      originY: 'center',
    };
    let red_line = {
      stroke: 'black',
      strokeWidth: 1,
      originX: 'center',
      originY: 'center',
    };
    // Points
    let point_1 = this.createPoint([352.5, 328], 3, 'black');
    let point_2 = this.createPoint([224, 379], 3, 'black');
    
    // Lines
    let d_1 = this.getDistance([380, 300], [point_1.left, point_1.top]);
    let a_1 = this.getAngle([380, -300], [point_1.left, -point_1.top]);
    this.createPolarLine([380, 300], d_1 - point_1.radius, a_1, blue_line, true);
    let d_2 = this.getDistance([200, 350], [point_2.left, point_2.top]);
    let a_2 = this.getAngle([200, -350], [point_2.left, -point_2.top]);
    this.createPolarLine([200, 350], d_2 - point_2.radius, a_2, red_line, true);

    // Labels
    this.addSVG(this.origin[0], this.origin[1], '/assets/Images/Research/best-worst/figure.svg', this.scale, 0);
    this.addSVG(400, 280, '/assets/Images/Research/best-worst/moon.svg', 1.5, 1, "black");
    this.addSVG(180, 330, '/assets/Images/Research/best-worst/earth.svg', 1.5, 1, "#black");
  }

  // Helper Functions
  createLine(p1, p2, options, arrow): void {
    let x1 = p1[0];
    let y1 = p1[1];
    let x2 = p2[0];
    let y2 = p2[1];
    let line = new fabric.Line([x1, y1, x2, y2], options);
    let angle = this.getAngle([x1, y1], [x2, y2]) * Math.PI / 180;
    let distance = this.getDistance([x1, y1], [x2, y2]);
    this.canvas.add(line);
    if (arrow) {
      line.set({
        x2: line.x1 + (distance-5) * Math.cos(angle),
        y2: line.y1 - (distance-5) * Math.sin(angle),
      });
      this.createArrow(line.x2, line.y2, line.stroke, angle);
    }
  }

  createPolarLine(p1, length, angle, options, arrow): void {
    this.createLine(p1, [p1[0]+length*Math.cos(angle*Math.PI/180), p1[1]+length*Math.sin(angle*Math.PI/180)], options, arrow);
  }

  createPoint(p1, r, color): fabric.Circle {
    let circle = new fabric.Circle({
      left: p1[0],
      top: p1[1],
      radius: r,
      fill: color,
      originX: 'center',
      originY: 'center',
    })
    this.canvas.add(circle);
    return circle;
  }

  getAngle(p1, p2): number { // returns in degrees
    let angle = Math.atan2(p2[1] - p1[1], -p1[0] + p2[0]) * 180 / Math.PI;
    if (angle < 0) {
      angle = angle + 360;
    }
    return angle;
  }

  addSVG(x, y, url, scale, index, color?): void {
    fabric.loadSVGFromURL(url, (objects, options) => {
      if (color) {
        for (let i = 0; i < objects.length; i++) {
          objects[i].set({
            fill: color
          })
        }
      }
      let svg = fabric.util.groupSVGElements(objects, options);
      svg.set({
        left: x, 
        top: y,
        scaleX: scale,
        scaleY: scale,
        originX: 'center',
        originY: 'center',
      });
      this.canvas.insertAt(svg, index);
    }); 
  }

  getDistance(p1, p2): number {
    let x_diff = p2[0] - p1[0];
    let y_diff = p2[1] - p1[1];
    let distance = Math.sqrt(x_diff*x_diff + y_diff*y_diff);
    return distance;
  }

  createArrow(x2, y2, color, angle): void {
    let triangle = new fabric.Triangle({
      width: 8.5,
      height: 10,
      angle: (-angle*180/Math.PI)+90,
      left: x2,
      top: y2,
      fill: color,
      originX: 'center',
      originY: 'center',
    });
    this.canvas.add(triangle);
  }

  createArc(p1, r, startAngle, endAngle, color): void {
    let arc = new fabric.Circle({
        radius: r,
        stroke: color,
        fill: "transparent",
        left: p1[0],
        top: p1[1],
        originX: 'center',
        originY: 'center',
        startAngle: -endAngle,
        endAngle: -startAngle,
    });
    arc.startAngle = -endAngle + 3;
    this.canvas.add(arc);
    let arrowLineAngle = endAngle*Math.PI/180 + Math.PI/2;
    this.createArrow(p1[0] + r*Math.cos(endAngle*Math.PI/180) + 5*Math.sin(endAngle*Math.PI/180), p1[1] - r*Math.sin(endAngle*Math.PI/180) + 5*Math.cos(endAngle*Math.PI/180), color, arrowLineAngle);
  }

  save(): void {
    let filedata = this.canvas.toSVG();
    let file = new Blob([filedata], { type: "image/svg+xml;charset=utf-8" });
    let file_src = URL.createObjectURL(file);
    let download = document.createElement('a');
    download.href = file_src;
    download.download = 'cr3bp Figure';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  }

}
