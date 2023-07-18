import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-satellites',
  templateUrl: './satellites.component.html',
  styleUrls: ['./satellites.component.scss']
})
export class SatellitesComponent implements OnInit {

  private canvas;
  private font = "Times New Roman";
  private font_size = 20;
  private space_satellites = [];
  private satellites = [];
  private boats = [];
  private planes = [];
  private lines = [];

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
    let canvas = new fabric.Canvas('c');
    this.canvas = canvas;
    canvas.setDimensions({width: 1000, height: 600});
    let lines = this.lines;
    let ref = this;
    canvas.on('object:moving', function() {
      update(ref);
    });
    canvas.on('object:scaling', function() {
      update(ref);
    });
    canvas.on('object:resizing', function() {
      update(ref);
    });
    canvas.on('object:rotating', function() {
      update(ref);
    });
    canvas.on('object:skewing', function() {
      update(ref);
    });

    function update(ref) {
      ref.updateLine(lines[0], ref.satellites[0], ref.space_satellites[0], ref);
      ref.updateLine(lines[1], ref.space_satellites[0], ref.space_satellites[1], ref);
      ref.updateLine(lines[2], ref.space_satellites[1], ref.space_satellites[2], ref);
      ref.updateLine(lines[3], ref.space_satellites[2], ref.space_satellites[3], ref);
      ref.updateLine(lines[4], ref.satellites[1], ref.space_satellites[3], ref);
      ref.updateLine(lines[5], ref.space_satellites[0], ref.space_satellites[2], ref);
      ref.updateLine(lines[6], ref.space_satellites[1], ref.space_satellites[3], ref);
      ref.updateLine(lines[7], ref.boats[0], ref.space_satellites[1], ref);
      ref.updateLine(lines[8], ref.planes[0], ref.space_satellites[1], ref);
    }

    this.draw();
  }

  draw(): void {
    this.createSpaceSatellite(200, 150, -160);
    this.createSpaceSatellite(400, 250, -180);
    this.createSpaceSatellite(580, 100, 170);
    this.createSpaceSatellite(800, 140, 160);
    this.createSatellite(100, 500, false);
    this.createSatellite(900, 500, true);
    this.createBoat(300, 490);
    this.createPlane(600, 390);
    this.createLine(this.satellites[0], this.space_satellites[0], '#E91E1C');
    this.createLine(this.space_satellites[0], this.space_satellites[1], '#29DE03');
    this.createLine(this.space_satellites[1], this.space_satellites[2], '#29DE03');
    this.createLine(this.space_satellites[2], this.space_satellites[3], '#29DE03');
    this.createLine(this.satellites[1], this.space_satellites[3], '#E91E1C');
    this.createLine(this.space_satellites[0], this.space_satellites[2], '#29DE03');
    this.createLine(this.space_satellites[1], this.space_satellites[3], '#29DE03');
    this.createLine(this.boats[0], this.space_satellites[1], '#E91E1C');
    this.createLine(this.planes[0], this.space_satellites[1], '#E91E1C');
  }

  updateLine(line, object_1, object_2, ref): void {
    let antenna_1 = object_1.getItemByName('antenna');
    let antenna_2 = object_2.getItemByName('antenna');
    let antenna_1_abs = ref.getAbsolutePosition(antenna_1);
    let antenna_2_abs = ref.getAbsolutePosition(antenna_2);
    line.set({
      x1: antenna_1_abs[0],
      y1: antenna_1_abs[1],
      x2: antenna_2_abs[0],
      y2: antenna_2_abs[1]
    });
  }

  // Helper Functions

  createPlane(x, y): void {
    let base = new fabric.Ellipse({
      rx: 8,
      ry: 10,
      left: 0,
      top: 0,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let left = new fabric.Polygon([
      { x: 0, y: 7 },
      { x: -60, y: -3 },
      { x: 0, y: 0 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let right = new fabric.Polygon([
      { x: 0, y: 7 },
      { x: 60, y: -3 },
      { x: 0, y: 0 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let left_engine = new fabric.Circle({
      radius: 5,
      left: -20,
      top: 5,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let right_engine = new fabric.Circle({
      radius: 5,
      left: 20,
      top: 5,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let left_tail = new fabric.Polygon([
      { x: 0, y: -5 },
      { x: -23, y: -9.5 },
      { x: 0, y: -8 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let right_tail = new fabric.Polygon([
      { x: 0, y: -5 },
      { x: 23, y: -9.5 },
      { x: 0, y: -8 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let middle_tail = new fabric.Polygon([
      { x: -1.5, y: -9.5 },
      { x: 1.5, y: -9.5 },
      { x: 0, y: -20 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let antenna = new fabric.Circle({
      radius: 0,
      left: 0,
      top: -10,
      fill: '',
      originX: 'center',
      originY: 'center',
      name: 'antenna',
    });

    let group = new fabric.Group([
      base, left, right, left_engine, right_engine, left_tail, right_tail, middle_tail, antenna
    ], {
      left: x,
      top: y,
      originX: 'center',
      originY: 'center',
    });
    group.setControlsVisibility({ 
      mt: false,
      mb: false,
      ml: false,
      mr: false,
    });

    this.planes.push(group);
    this.canvas.add(group);
  }

  createBoat(x, y): void {
    let base = new fabric.Polygon([
      { x: 0, y: 0 },
      { x: 50, y: 0 },
      { x: 70, y: -20 },
      { x: -10, y: -10 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let left = new fabric.Polygon([
      { x: 25, y: -10 },
      { x: 25, y: -60 },
      { x: 0, y: -10 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let right = new fabric.Polygon([
      { x: 27, y: -10 },
      { x: 27, y: -70 },
      { x: 63, y: -13 },
    ], {
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
    });

    let line = new fabric.Line([-10, -8, 70, -19.875], {
      stroke: 'white',
      strokeWidth: 2,
      originX: 'right',
      originY: 'bottom',
    });

    let antenna = new fabric.Circle({
      radius: 5,
      left: 27,
      top: -70,
      fill: '',
      originX: 'center',
      originY: 'center',
      name: 'antenna',
    });

    let group = new fabric.Group([
      base, left, right, line, antenna
    ], {
      left: x,
      top: y,
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
    this.boats.push(group);
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
    this.space_satellites.push(group);
  }

  createSatellite(x, y, flip): void {
    let center_rectangle = new fabric.Rect({
      left: 7,
      top: -17,
      height: 22,
      width: 6,
      fill: '#28587A',
      originX: 'center',
      originY: 'center',
      angle: -45,
    });
    let antenna_1 = new fabric.Path('M -22 0 C -18 14, 18 14, 22 0', {
      fill: '#28587A',
      stroke: '',
      top: -22,
      originX: 'center',
      originY: 'bottom',
    });
    let antenna_2 = new fabric.Line([0, -30, 0, -50], {
      stroke: '#28587A',
      strokeWidth: 2,
      originX: 'center',
      originY: 'bottom',
    });
    let antenna_3 = new fabric.Line([-13, -30, 0, -45], {
      stroke: '#28587A',
      strokeWidth: 1,
      originX: 'right',
      originY: 'bottom',
    });
    let antenna_4 = new fabric.Line([13, -30, 0, -45], {
      stroke: '#28587A',
      strokeWidth: 1,
      originX: 'left',
      originY: 'bottom',
    });
    let antenna_5 = new fabric.Circle({
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
      antenna_1, antenna_2, antenna_3, antenna_4, antenna_5
    ], {
      left: x,
      top: y,
      originX: 'center',
      originY: 'center',
      angle: 45,
    });
    if (flip) {
      group.flipX = true;
      group.angle = -45;
    }
    group.setControlsVisibility({ 
      mtr: false,
      mt: false,
      mb: false,
      ml: false,
      mr: false,
    });
    this.canvas.add(group);
    this.satellites.push(group);
  }

  getAbsolutePosition(object): any {
    let result = [];
    let matrix = object.calcTransformMatrix();
    result[0] = matrix[4];
    result[1] = matrix[5];
    return result;
  }

  createLine(object_1, object_2, color): void {
    let antenna_1 = object_1.getItemByName('antenna');
    let antenna_2 = object_2.getItemByName('antenna');
    let antenna_1_abs = this.getAbsolutePosition(antenna_1);
    let antenna_2_abs = this.getAbsolutePosition(antenna_2);
    let line = new fabric.Line([antenna_1_abs[0], antenna_1_abs[1], antenna_2_abs[0], antenna_2_abs[1]], {
      stroke: color,
      strokeWidth: 1,
      strokeDashArray: [5, 5],
      selectable: false,
    });
    this.canvas.add(line);
    this.lines.push(line);
  }

  save(): void {
    let filedata = this.canvas.toSVG();
    let file = new Blob([filedata], { type: "image/svg+xml;charset=utf-8" });
    let file_src = URL.createObjectURL(file);
    let download = document.createElement('a');
    download.href = file_src;
    download.download = 'Satellite Figure';
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  }

}
