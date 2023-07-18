import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-fov',
  templateUrl: './fov.component.html',
  styleUrls: ['./fov.component.scss']
})
export class FovComponent implements OnInit {

  private dimensions = [300, 470];
  private canvas;
  private font = "Times New Roman";
  private font_size = 30;
  private radius = 125;
  private angle = 130;
  private point_size = 10;
  private offset = [20, 107];

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // Helper function to search for specific object in group
    fabric.Group.prototype.getItemByName = function(name) {
      var object = null,
          objects = this.getObjects();
      for (var i = 0, len = this.size(); i < len; i++) {
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
  }

  draw(): void {
    let circle_x = this.dimensions[0]/2 + this.offset[0];
    let circle_y = this.dimensions[1]/2 + this.offset[1];
    this.createCircle(circle_x, circle_y);
    this.createTriangle(circle_x, circle_y);
  }

  // Helper Functions

  createTriangle(x, y): void {
    let height = 300;
    let point = new fabric.Rect({
      left: x,
      top: y - height,
      width: this.point_size,
      height: this.point_size,
      fill: 'black',
      originX: 'center',
      originY: 'center',
    });
    this.canvas.add(point);
    
    let label = new fabric.Text('Satellite', {
      fontFamily: this.font,
      fontSize: this.font_size,
      left: x,
      top: y - height - 25,
      originX: 'center',
      originY: 'center',
      fill: 'black',
    });
    this.canvas.add(label);

    let line_1 = new fabric.Line([x, y, x, y - height], {
      stroke: 'black',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    });
    this.canvas.add(line_1);

    let tangent_x = x + this.radius*Math.cos(this.angle*Math.PI/180);
    let tangent_y = y - this.radius*Math.sin(this.angle*Math.PI/180);
    let line_2 = new fabric.Line([x, y - height, tangent_x, tangent_y], {
      stroke: 'black',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    });
    this.canvas.add(line_2);

    let angle_1 = new fabric.Circle({
        radius: 40,
        stroke: '#FF0000',
        strokeWidth: 2,
        fill: "transparent",
        left: tangent_x,
        top: tangent_y,
        originX: 'center',
        originY: 'center',
        startAngle: -this.angle+90-28,
        endAngle: -this.angle+91,
        selectable: false,
    });
    this.canvas.add(angle_1);
    this.canvas.sendToBack(angle_1);

    let angle_2 = new fabric.Circle({
        radius: 40,
        stroke: '#7279FF',
        strokeWidth: 2,
        fill: "transparent",
        left: x,
        top: y - height,
        originX: 'center',
        originY: 'center',
        startAngle: 89,
        endAngle: 89 + 23,
        selectable: false,
    });
    this.canvas.add(angle_2);
    this.canvas.sendToBack(angle_2);

    let label_2 = new fabric.Text('εmin', {
      fontFamily: this.font,
      fontSize: this.font_size,
      left: 70,
      top: 200,
      originX: 'center',
      originY: 'center',
      fill: '#FF0000',
      fontStyle: 'italic',
      subscript: { size: 0.8, baseline: 0.2 },
    });
    label_2.setSubscript(1, 4);
    this.canvas.add(label_2);

    let label_3 = new fabric.Text('FOV', {
      fontFamily: this.font,
      fontSize: 25,
      left: 205,
      top: 70,
      originX: 'center',
      originY: 'center',
      fill: '#7279FF',
      fontStyle: 'italic',
    });
    this.canvas.add(label_3);

    let underline = new fabric.Rect({
      left: 205,
      top: 85,
      originX: 'center',
      originY: 'center',
      fill: '#7279FF',
      width: 50,
      height: 2,
    });
    this.canvas.add(underline);

    let label_4 = new fabric.Text('2', {
      fontFamily: this.font,
      fontSize: 25,
      left: 205,
      top: 100,
      originX: 'center',
      originY: 'center',
      fill: '#7279FF',
      fontStyle: 'italic',
    });
    this.canvas.add(label_4);

    let label_5 = new fabric.Text('Target', {
      fontFamily: this.font,
      fontSize: this.font_size,
      left: 40,
      top: 235,
      originX: 'center',
      originY: 'center',
      fill: 'black',
    });
    this.canvas.add(label_5);

  }

  createCircle(x, y): void {
    let box_size = this.point_size * 2;
    let circle = new fabric.Circle({
      radius: this.radius,
      left: 0,
      top: 0,
      stroke: 'black',
      strokeWidth: 2,
      fill: '',
      originX: 'center',
      originY: 'center',
    });
    
    let origin = new fabric.Circle({
      radius: 5,
      left: 0,
      top: 0,
      fill: 'black',
      originX: 'center',
      originY: 'center',
    });
    
    let point = new fabric.Circle({
      radius: 5,
      left: this.radius,
      top: 0,
      fill: 'black',
      originX: 'center',
      originY: 'center',
    });

    let line = new fabric.Line([this.radius, -this.radius+21, this.radius, this.radius-21], {
      stroke: 'black',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    });

    let line_2 = new fabric.Line([0, 0, this.radius, 0], {
      stroke: 'black',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    });

    let line_3 = new fabric.Line([this.radius-box_size, 0, this.radius-box_size, box_size+1], {
      stroke: 'black',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    });

    let line_4 = new fabric.Line([this.radius-box_size, box_size, this.radius, box_size], {
      stroke: 'black',
      strokeWidth: 2,
      originX: 'center',
      originY: 'center',
    });

    let label = new fabric.Text('Re', {
      fontFamily: this.font,
      fontSize: this.font_size,
      left: this.radius/2,
      top: -25,
      originX: 'center',
      originY: 'center',
      fill: 'black',
      fontStyle: 'italic',
      subscript: { size: 0.8, baseline: 0.2 },
      name: 'label',
      angle: this.angle
    });
    label.setSubscript(1, 2);

    let group = new fabric.Group([
      origin, circle, point, line, line_2, line_3, line_4, label
    ], {
      left: x - 1.25,
      top: y,
      originX: 'center',
      originY: 'center',
      angle: -this.angle,
    });

    this.canvas.add(group);
  }

  save(): void {
    let filedata = this.canvas.toSVG();
    let file = new Blob([filedata], { type: "image/svg+xml;charset=utf-8" });
    let file_src = URL.createObjectURL(file);
    let download = document.createElement('a');
    download.href = file_src;
    download.download = 'FOV Figure';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  }

}
