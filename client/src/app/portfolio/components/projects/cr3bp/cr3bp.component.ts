import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-cr3bp',
  templateUrl: './cr3bp.component.html',
  styleUrls: ['./cr3bp.component.scss']
})
export class Cr3bpComponent implements OnInit, AfterViewInit {
  private canvas;
  private dimensions = [410, 410];
  private origin = [175, 235];

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    // Helper function to search for specific object in group
    fabric.Group.prototype.getItemByName = function(name) {
      let object = null,
      objects = this.getObjects();
      for (let i = 0, len = this.size(); i < len; i++) {
        if (objects[i].name && objects[i].name === name) {
          object = objects[i];
          break;
        }
      }
      return object;
    };
    // Setting up canvas element
    let canvas = new fabric.StaticCanvas('c');
    this.canvas = canvas;
    canvas.setDimensions({width: this.dimensions[0], height: this.dimensions[1]});
    this.draw();
    canvas.renderAll();

  }

  draw(): void {
    let axis_line = {
      stroke: 'black',
      strokeWidth: 1.9,
      originX: 'center',
      originY: 'center',
      strokeDashArray: [2.5, 2.5],
    };
    let red_line = {
      stroke: 'red',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    };
    let black_line = {
      stroke: 'black',
      strokeWidth: 0.6,
      originX: 'center',
      originY: 'center',
    };
    // Axis Lines
    this.createLine([this.origin[0], this.origin[1]], [this.origin[0]+200, this.origin[1]], axis_line, true);
    this.createLine([this.origin[0], this.origin[1]], [this.origin[0], this.origin[1]+200], axis_line, true);
    this.createLine([this.origin[0], this.origin[1]], [this.origin[0]+200*Math.cos(225*Math.PI/180), this.origin[1]+200*Math.cos(225*Math.PI/180)], axis_line, true);

    // Points
    let point_1 = this.createPoint([this.origin[0] + 170*Math.cos(20*Math.PI/180), this.origin[1] - 170*Math.sin(20*Math.PI/180)], 5, 'black');
    let point_2 = this.createPoint([this.origin[0] + 170*Math.cos(55*Math.PI/180), this.origin[1] - 170*Math.sin(55*Math.PI/180)], 5, 'black');
    let point_3 = this.createPoint([this.origin[0] + 100*Math.cos(200*Math.PI/180), this.origin[1] - 100*Math.sin(200*Math.PI/180)], 5, 'black');
    
    // Red Lines
    this.createPolarLine([this.origin[0], this.origin[1]], 200, 20, red_line, true);
    this.createPolarLine([this.origin[0], this.origin[1]], 200, 110, red_line, true);
    this.createPolarLine([this.origin[0], this.origin[1]], 150, 225, red_line, true);

    // Black Lines
    let d_1 = this.getDistance([point_1.left, point_1.top], [point_2.left, point_2.top]);
    let a_1 = this.getAngle([point_1.left, -point_1.top], [point_2.left, -point_2.top]);
    this.createPolarLine([point_1.left, point_1.top], d_1 - point_2.radius, a_1, black_line, true);
    let d_2 = this.getDistance([this.origin[0], this.origin[1]], [point_3.left, point_3.top]);
    let a_2 = this.getAngle([this.origin[0], -this.origin[1]], [point_3.left, -point_3.top]);
    this.createPolarLine([this.origin[0], this.origin[1]], d_2 - point_3.radius, a_2, black_line, true);
    let d_3 = this.getDistance([this.origin[0], this.origin[1]], [point_2.left, point_2.top]);
    let a_3 = this.getAngle([this.origin[0], -this.origin[1]], [point_2.left, -point_2.top]);
    this.createPolarLine([this.origin[0], this.origin[1]], d_3 - point_2.radius, a_3, black_line, true);
    let d_4 = this.getDistance([point_3.left, point_3.top], [point_2.left, point_2.top]);
    let a_4 = this.getAngle([point_3.left, -point_3.top], [point_2.left, -point_2.top]);
    this.createPolarLine([point_3.left, point_3.top], d_4 - point_2.radius, a_4, black_line, true);

    // Angles
    this.createArc([this.origin[0], this.origin[1]], 100, 0, 20, 'black');

    // Labels
    this.addSVG(290, 213, '/assets/Images/Research/cr3bp/theta.svg', 2, 'black');
    this.addSVG(390, 235, '/assets/Images/Research/cr3bp/X uppercase.svg', 1.25, 'black');
    this.addSVG(181, 18, '/assets/Images/Research/cr3bp/Y uppercase.svg', 1.25, 'black');
    this.addSVG(18, 392, '/assets/Images/Research/cr3bp/Z uppercase.svg', 1.25, 'black');
    this.addSVG(380, 157, '/assets/Images/Research/cr3bp/X lowercase.svg', 1.25, 'red');
    this.addSVG(105, 30, '/assets/Images/Research/cr3bp/Y lowercase.svg', 1.25, 'red');
    this.addSVG(95, 340, '/assets/Images/Research/cr3bp/Z lowercase.svg', 1.25, 'red');
    this.addSVG(185, 251, '/assets/Images/Research/cr3bp/origin.svg', 2, 'black');
    this.addSVG(55, 280, '/assets/Images/Research/cr3bp/m1.svg', 1.25, 'black');
    this.addSVG(360, 190, '/assets/Images/Research/cr3bp/m2.svg', 1.25, 'black');
    this.addSVG(272, 77, '/assets/Images/Research/cr3bp/m3.svg', 1.25, 'black');
    this.addSVG(113, 275, '/assets/Images/Research/cr3bp/r1.svg', 1.25, 'black');
    this.addSVG(115, 210, '/assets/Images/Research/cr3bp/r13.svg', 1.25, 'black');
    this.addSVG(260, 186, '/assets/Images/Research/cr3bp/r2.svg', 1.25, 'black');
    this.addSVG(255, 150, '/assets/Images/Research/cr3bp/r3.svg', 1.25, 'black');
    this.addSVG(325, 130, '/assets/Images/Research/cr3bp/r23.svg', 1.25, 'black');

    // Z-index
    this.canvas.bringToFront(point_1);
    this.canvas.bringToFront(point_2);
    this.canvas.bringToFront(point_3);
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

  addSVG(x, y, url, scale, color): void {
    fabric.loadSVGFromURL(url, (objects, options) => {
      for (let i = 0; i < objects.length; i++) {
        objects[i].set({
          fill: color
        })
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
      this.canvas.add(svg); 
      this.canvas.renderAll();
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