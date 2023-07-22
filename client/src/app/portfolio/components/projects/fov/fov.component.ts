import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-fov',
  templateUrl: './fov.component.html',
  styleUrls: ['./fov.component.scss']
})
export class FovComponent implements OnInit, AfterViewInit {

  private dimensions = [320, 470];
  private canvas;
  private font = "Times New Roman";
  private font_size = 30;
  private radius = 125;
  private angle = 130;
  private point_size = 10;
  private offset = [30, 107];

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  
  ngAfterViewInit(): void {
    var preload = document.getElementsByClassName('preload-font');
    while(preload[0]) {
        preload[0].parentNode.removeChild(preload[0]);
    }

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
    let circle_x = this.dimensions[0]/2 + this.offset[0];
    let circle_y = this.dimensions[1]/2 + this.offset[1];
    this.createCircle(circle_x, circle_y);
    this.createTriangle(circle_x, circle_y);
    this.createText(190, 20, 'Satellite', 'black', 30);
    this.addSVG(87, 195, '/assets/Images/Research/FOV/epsilon.svg', 1.5, 'red');
    this.addSVG(130, 310, '/assets/Images/Research/FOV/Re.svg', 1.5, 'black');
    this.addSVG(225, 80, '/assets/Images/Research/FOV/fraction.svg', 1, 'blue');
  }

  // Helper Functions

  createText(x, y, text, color, size) {
    let label = new fabric.Text(text, {
      fontFamily: 'cmu',
      fontSize: size,
      left: x,
      top: y,
      originX: 'center',
      originY: 'center',
      fill: color,
    });
    this.canvas.add(label);
  }

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

    let label_5 = new fabric.Text('Target', {
      fontFamily: 'cmu',
      fontSize: this.font_size,
      left: 57,
      top: 235,
      originX: 'center',
      originY: 'center',
      fill: 'black',
    });
    this.canvas.add(label_5);

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

    let group = new fabric.Group([
      origin, circle, point, line, line_2, line_3, line_4
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
