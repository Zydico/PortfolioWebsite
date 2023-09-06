import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-satellites2',
  templateUrl: './satellites2.component.html',
  styleUrls: ['./satellites2.component.scss']
})
export class Satellites2Component implements OnInit, AfterViewInit {
  private canvas;
  private dimensions = [700, 600];
  private origin = [this.dimensions[0]/2, this.dimensions[1]/2];

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
    // let red_line = {
    //   stroke: 'red',
    //   strokeWidth: 1,
    //   originX: 'center',
    //   originY: 'center',
    //   strokeDashArray: [5, 5],    
    // };
    // let triangles = {
    //   fill: '#436FC1',
    //   width: 50,
    //   height: 0.5*Math.sqrt(3)*50,
    //   originX: 'center',
    //   originY: 'center',
    // }
    // let circle = {
    //   fill: '#FF8484',
    //   radius: 150,
    //   originX: 'center',
    //   originY: 'center',
    // }
    // let square = {
    //   fill: '#2D2D2D',
    //   width: 50,
    //   height: 50,
    //   originX: 'center',
    //   originY: 'center',
    // }

    // this.createCircle(160, 160, circle);
    // this.createSquare(160, 160, square);
    // this.createTriangle(100, 70, triangles);
    // this.createTriangle(80, 190, triangles);
    // this.createTriangle(250, 170, triangles);

    // this.createCircle(500, 200, circle);
    // this.createSquare(500, 200, square);
    // this.createTriangle(440, 120, triangles);
    // this.createTriangle(580, 150, triangles);
    // this.createTriangle(590, 250, triangles);
    // this.createTriangle(500, 300, triangles);
    // this.createTriangle(430, 240, triangles);

    // this.createCircle(300, 450, circle);
    // this.createSquare(300, 450, square);
    // this.createTriangle(370, 360, triangles);
    // this.createTriangle(390, 510, triangles);
    // this.createTriangle(310, 540, triangles);
    // this.createTriangle(220, 500, triangles);
    // this.createTriangle(200, 400, triangles);
    // this.createTriangle(280, 350, triangles);

    let circle = {
      fill: '#FF8484',
      radius: 100,
      originX: 'center',
      originY: 'center',
    }
    let red_line = {
      stroke: '#FF8484',
      strokeWidth: 2,
      originX: 'left',
      originY: 'top',
      strokeDashArray: [5, 5],    
    };
    //this.createCircle(130, 400, circle);
    this.createCircle(240, 450, circle);
    this.createCircle(370, 450, circle);
    this.createCircle(550, 470, circle);
    this.createAntenna(100, 350);
    this.createAntenna(175, 410);
    this.createAntenna(300, 450);
    this.createAntenna(400, 420);
    this.createAntenna(490, 470);
    this.createAntenna(600, 480);

    this.createRedLine([240-120, 450], [300, 100], red_line);
    this.createRedLine([240+120, 450], [300, 100], red_line);
    this.createRedLine([240-120, 450], [300, 100], red_line);
    this.createRedLine([240+120, 450], [300, 100], red_line);
    this.createRedLine([240-120, 450], [300, 100], red_line);
    this.createRedLine([240+120, 450], [300, 100], red_line);
    this.createSpaceSatellite(50, 50, 180);
    this.createSpaceSatellite(50, 50, 180);
    this.createSpaceSatellite(50, 50, 180);

  }

  // Helper Functions
  createTriangle(x, y, options): void {
    let triangle = new fabric.Triangle(options);
    triangle.left = x;
    triangle.top = y;
    this.canvas.add(triangle);
  }

  createCircle(x, y, options): void {
    let circle = new fabric.Circle(options);
    circle.left = x;
    circle.top = y;
    this.canvas.add(circle);
  }

  createSquare(x, y, options): void {
    let square = new fabric.Rect(options);
    square.left = x;
    square.top = y;
    this.canvas.add(square);
  }

  createAntenna(x, y): void {
    let sides = {
      stroke: '#28587A',
      strokeWidth: 5,
      originX: 'center',
      originY: 'center',
    }
    let mid = {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    }
    let left = this.createLine([-20, 30], [0, -30], sides);
    let right = this.createLine([20, 30], [0, -30], sides);
    let mid_1 = this.createLine([18, 28], [-15, 15], mid);
    let mid_2 = this.createLine([-15, 15], [15, 15], mid);
    let mid_3 = this.createLine([15, 15], [-12.3, 0], mid);
    let mid_4 = this.createLine([-12.3, 0], [12.1, 0], mid);
    let mid_5 = this.createLine([11.5, 0], [-7, -15], mid);
    let circle = new fabric.Circle({
      radius: 6,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
      left: 0,
      top: -30,
    });

    let group = new fabric.Group([
      left, right, mid_1, mid_2, mid_3, mid_4, mid_5, circle
    ], {
      left: x,
      top: y,
      originX: 'center',
      originY: 'center',
    });
    this.canvas.add(group);
  }

  createLine(p1, p2, options): fabric.Line {
    let x1 = p1[0];
    let y1 = p1[1];
    let x2 = p2[0];
    let y2 = p2[1];
    let line = new fabric.Line([x1, y1, x2, y2], options);
    return line;
  }

  createRedLine(p1, p2, options): fabric.Line {
    let x1 = p1[0];
    let y1 = p1[1];
    let x2 = p2[0];
    let y2 = p2[1];
    let line = new fabric.Line([x1, y1, x2, y2], options);
    this.canvas.add(line);
    return line;
  }

  createSpaceSatellite(x, y, angle): void {
    let center_rectangle = new fabric.Rect({
      left: 0,
      top: 0,
      height: 40,
      width: 20,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });
    let right_rectangle_diag_1 = new fabric.Line([8, 0, 15, -8], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'left',
      originY: 'bottom',
    });
    let right_rectangle_diag_2 = new fabric.Line([8, 0, 15, 0], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'left',
      originY: 'center',
    });
    let right_rectangle_diag_3 = new fabric.Line([8, 0, 15, 8], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'left',
      originY: 'top',
    });
    let left_rectangle_diag_1 = new fabric.Line([-8, 0, -15, -8], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'right',
      originY: 'bottom',
    });
    let left_rectangle_diag_2 = new fabric.Line([-8, 0, -15, 0], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'right',
      originY: 'center',
    });
    let left_rectangle_diag_3 = new fabric.Line([-8, 0, -15, 8], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'right',
      originY: 'top',
    });
    let right_rectangle = new fabric.Rect({
      left: 14,
      top: 0,
      height: 24,
      width: 50,
      fill: '#34719E',
      originX: 'left',
      originY: 'center',
    });
    let right_rectangle_line_1 = new fabric.Rect({
      left: 14,
      top: -4,
      height: 1,
      width: 50,
      fill: 'white',
      originX: 'left',
      originY: 'center',
    });
    let right_rectangle_line_2 = new fabric.Rect({
      left: 14,
      top: 4,
      height: 1,
      width: 50,
      fill: 'white',
      originX: 'left',
      originY: 'center',
    });
    let right_rectangle_line_3 = new fabric.Rect({
      left: 14+1*50/4,
      top: 0,
      height: 24,
      width: 1,
      fill: 'white',
      originX: 'left',
      originY: 'center',
    });
    let right_rectangle_line_4 = new fabric.Rect({
      left: 14+2*50/4,
      top: 0,
      height: 24,
      width: 1,
      fill: 'white',
      originX: 'left',
      originY: 'center',
    });
    let right_rectangle_line_5 = new fabric.Rect({
      left: 14+3*50/4,
      top: 0,
      height: 24,
      width: 1,
      fill: 'white',
      originX: 'left',
      originY: 'center',
    });
    let left_rectangle = new fabric.Rect({
      left: -14,
      top: 0,
      height: 24,
      width: 50,
      fill: '#34719E',
      originX: 'right',
      originY: 'center',
    });
    let left_rectangle_line_1 = new fabric.Rect({
      left: -14,
      top: -4,
      height: 1,
      width: 50,
      fill: 'white',
      originX: 'right',
      originY: 'center',
    });
    let left_rectangle_line_2 = new fabric.Rect({
      left: -14,
      top: 4,
      height: 1,
      width: 50,
      fill: 'white',
      originX: 'right',
      originY: 'center',
    });
    let left_rectangle_line_3 = new fabric.Rect({
      left: -14-1*50/4,
      top: 0,
      height: 24,
      width: 1,
      fill: 'white',
      originX: 'right',
      originY: 'center',
    });
    let left_rectangle_line_4 = new fabric.Rect({
      left: -14-2*50/4,
      top: 0,
      height: 24,
      width: 1,
      fill: 'white',
      originX: 'right',
      originY: 'center',
    });
    let left_rectangle_line_5 = new fabric.Rect({
      left: -14-3*50/4,
      top: 0,
      height: 24,
      width: 1,
      fill: 'white',
      originX: 'right',
      originY: 'center',
    });
    let antenna_1 = new fabric.Rect({
      left: 0,
      top: -18,
      height: 5,
      width: 6,
      fill: '#28587A',
      originX: 'center',
      originY: 'bottom',
    });
    let antenna_2 = new fabric.Path('M -22 0 C -18 14, 18 14, 22 0', {
      fill: '#28587A',
      stroke: '',
      top: -22,
      originX: 'center',
      originY: 'bottom',
    });
    let antenna_3 = new fabric.Line([0, -30, 0, -50], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'center',
      originY: 'bottom',
    });
    let antenna_4 = new fabric.Line([-13, -30, 0, -45], {
      stroke: '#28587A',
      strokeWidth: 1,
      originX: 'right',
      originY: 'bottom',
    });
    let antenna_5 = new fabric.Line([13, -30, 0, -45], {
      stroke: '#28587A',
      strokeWidth: 1,
      originX: 'left',
      originY: 'bottom',
    });
    let antenna_6 = new fabric.Circle({
      radius: 2,
      left: 0,
      top: -52,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
      name: 'antenna',
    });
    let group = new fabric.Group([
      center_rectangle, 
      right_rectangle_diag_1, right_rectangle_diag_2, right_rectangle_diag_3,
      right_rectangle, right_rectangle_line_1, right_rectangle_line_2, right_rectangle_line_3, right_rectangle_line_4, right_rectangle_line_5,
      left_rectangle_diag_1, left_rectangle_diag_2, left_rectangle_diag_3,
      left_rectangle, left_rectangle_line_1, left_rectangle_line_2, left_rectangle_line_3, left_rectangle_line_4, left_rectangle_line_5,
      antenna_1, antenna_2, antenna_3, antenna_4, antenna_5, antenna_6,
    ], {
      left: x,
      top: y,
      angle: angle,
      originX: 'center',
      originY: 'center',
    });
    group.setControlsVisibility({ 
      mt: false,
      mb: false,
      ml: false,
      mr: false,
    });
    this.canvas.add(group);
  }

  getDistance(p1, p2): number {
    let x_diff = p2[0] - p1[0];
    let y_diff = p2[1] - p1[1];
    let distance = Math.sqrt(x_diff*x_diff + y_diff*y_diff);
    return distance;
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