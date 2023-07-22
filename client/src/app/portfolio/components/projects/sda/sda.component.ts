import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-sda',
  templateUrl: './sda.component.html',
  styleUrls: ['./sda.component.scss']
})
export class SdaComponent implements OnInit {

  private canvas;
  private axis_size = 120;
  private margins = 0;
  private center_X;
  private center_Y;
  private origin_offset = [-100, 70];
  private axis_line_width = 1.9;
  private line_dash = 2.5;
  private arrow_length = 10;
  private sharpness = 65 * (Math.PI/180);
  private font = "Times New Roman";
  private font_size = 20;

  // Special symbols for reference (to copy and paste)
  // X̂ Ŷ Ẑ x̂ ŷ ẑ ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ r̄ ϴ θ

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    // Setting up the canvas element
    let canvas = new fabric.Canvas('c');
    this.canvas = canvas;
    canvas.setDimensions({width: this.axis_size*2 + this.margins, height: this.axis_size*2 + this.margins});
    this.center_X = canvas.getWidth()/2 + this.origin_offset[0];
    this.center_Y = canvas.getHeight()/2 + this.origin_offset[1];
    this.draw();
  }

  draw(): void {
    // this.drawLine(0, 0, this.axis_size, 0, 'black', this.axis_line_width, true, true);
    // this.drawLine(0, 0, 0, this.axis_size, 'black', this.axis_line_width, true, true);
    // this.drawLine(0, 0, -this.axis_size * Math.cos(Math.PI/4), -this.axis_size * Math.cos(Math.PI/4), 'black', this.axis_line_width, true, true);
    //this.drawLine(130, 110, 130, 50, 'black', 0.75, false, false);
    this.drawPoint(130, 50, '#B6B6B6', 30);
    this.drawPoint(0, 0, 'black', 4);
    this.drawPoint(130, 150, 'black', 4);
    this.drawLine(0, 0, 130, 50, 'black', 0.75, false, true);
    this.drawLine(0, 0, 128, 148, 'black', 0.75, false, true);
    //this.drawLine(0, 0, 130, 110, 'black', 0.75, false, true);
    let angle_1 = Math.atan(50/130)*180/Math.PI;
    let angle_2 = Math.atan(110/130)*180/Math.PI;
    let angle_3 = Math.atan(148/128)*180/Math.PI;
    this.drawArc(0, 0, 80, angle_1, angle_3, '#FF0000');
    //this.drawArc(0, 0, 100, angle_1, angle_2, '#7279FF');
    // this.createText('X̂', 212, 0, 'black', false, true);
    // this.createText('Ŷ', 0, 215, 'black', false, true);
    // this.createText('Ẑ', -155, -155, 'black', false, true);
    this.createText('Observer', 35, -15, 'black', false, false);
    this.createText('Moon', 190, 50, 'black', false, false);
    this.createText('Target', 170, 150, 'black', false, false);
    this.createText('θ', 42, 65, '#FF0000', false, true);
    //this.createText('φ', 93, 65, '#7279FF', false, true);
    this.createText('ρ', 70, 19, 'black', true, true);
    this.createText('γ', 70, 100, 'black', true, false);
    this.canvas.renderAll();
  }

  // Helper Functions

  drawLine(x1, y1, x2, y2, color, width, dashed, arrowed): void {
    let angle = Math.atan2(y2-y1, x2-x1); // radians
    let x = x2 - x1;
    let y = y2 - y1;
    let distance = Math.sqrt(x*x + y*y);
    let line = new fabric.Line([x1 + this.center_X, -y1 + this.center_Y, x2 + this.center_X, -y2 + this.center_Y], {
      stroke: color,
      strokeWidth: width,
      originX: 'center',
      originY: 'center',
      selectable: false,
    });
    if (dashed) {
      line.strokeDashArray = [this.line_dash, this.line_dash];
    }
    this.canvas.add(line);
    if (arrowed) {
      this.drawArrow(line.x2, line.y2, color, angle);
      line.set({
        x2: line.x1 + (distance-5) * Math.cos(angle),
        y2: line.y1 - (distance-5) * Math.sin(angle),
      });
    }
  }

  drawPoint(x, y, color, r): void {
    let point = new fabric.Circle({
      radius: r,
      fill: color,
      left: this.center_X + x,
      top: this.center_Y - y,
      originX: 'center',
      originY: 'center',
      selectable: false,
    });
    this.canvas.add(point);
  }

  drawArrow(x2, y2, color, angle): void {
    let left_angle = -angle + Math.PI/2 + this.sharpness;
    let right_angle = -angle - Math.PI/2 - this.sharpness;;
    let point1 = [x2, y2]; // end point
    let point2 = [x2 + this.arrow_length * Math.cos(left_angle), y2 + this.arrow_length * Math.sin(left_angle)];
    let point3 = [x2 + this.arrow_length * Math.cos(right_angle), y2 + this.arrow_length * Math.sin(right_angle)];

    let polygon = new fabric.Polygon([
      { x: point1[0], y: point1[1] },
      { x: point2[0], y: point2[1] },
      { x: point3[0], y: point3[1] }], {
        fill: color,
        selectable: false,
      }
    );
    this.canvas.add(polygon);
  }

  createText(text, x, y, color, bold, italicize): void {
    let label = new fabric.Text(text, {
      fontFamily: this.font,
      fontSize: this.font_size,
      left: this.center_X + x,
      top: this.center_Y - y,
      originX: 'center',
      originY: 'center',
      fill: color,
    });
    if (bold) {
      label.fontWeight = 'bold';
    }
    if (italicize) {
      label.fontStyle = 'italic';
    }
    this.canvas.add(label);
  }

  drawArc(x, y, r, startAngle, endAngle, color): void {
    let arc = new fabric.Circle({
        radius: r,
        stroke: color,
        fill: "transparent",
        left: this.center_X + x,
        top: this.center_Y - y,
        originX: 'center',
        originY: 'center',
        startAngle: -endAngle,
        endAngle: -startAngle,
        selectable: false,
    });
    arc.startAngle = -endAngle + 3;
    this.canvas.add(arc);
    let arrowLineAngle = endAngle*Math.PI/180 + Math.PI / 2 - 0.1;
    this.drawArrow(x + this.center_X + r*Math.cos(endAngle*Math.PI/180), -y + this.center_Y - r*Math.sin(endAngle*Math.PI/180), color, arrowLineAngle);
  }

  save(): void {
    let filedata = this.canvas.toSVG();
    let file = new Blob([filedata], { type: "image/svg+xml;charset=utf-8" });
    let file_src = URL.createObjectURL(file);
    let download = document.createElement('a');
    download.href = file_src;
    download.download = 'Cislunar SDA Figure';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  }
}