import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { fabric } from 'fabric';

@Component({
  selector: 'app-pathfinding-algorithms',
  templateUrl: './pathfinding-algorithms.component.html',
  styleUrls: ['./pathfinding-algorithms.component.scss']
})
export class PathfindingAlgorithmsComponent implements OnInit {
  private canvas;
  grid_size = 20; // Grid width and height in pixels
  canvas_size = [800, 600]; // Grid width and height in pixels
  mode = 'start'; // Mouse click tile mode. Between [start/goal/obstacle]
  algorithm = 'dijkstra'; // Current algorithm search mode

  blocks = []; // 2D array of the grid
  start = null; // Reference to the current start block. Can only be one start block.
  goal = null;
  open_nodes = []; // Nodes to be evaluated
  closed_nodes = []; // Nodes already evaluated
  path = [];

  hover_block = null; // Reference to the Fabric rect element for hovering. Follows the mouse.
  mouse_down = false; 
  drag_mode = 'add'; // Chooses between 'add' and 'remove'. Depends on what you clicked and keeps it like that for the drag.
  current_color = null;
  inAnimation = false;
  speed = 0;
  startDate = null;
  endDate = null;
  elapsedTime = 0.00;

  constructor(public loader: LoaderService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    // Setting up canvas element
    let canvas = new fabric.Canvas('c');
    this.canvas = canvas;
    canvas.setDimensions({width: this.canvas_size[0], height: this.canvas_size[1]});
    canvas.set({
      backgroundColor: '#EFEFEF',
      selection: false,
      renderOnAddRemove: false,
    })
    this.clearGrid(); // Sets up initial 2D grid array

    let hover_square = {
      opacity: 0,
      width: this.grid_size,
      height: this.grid_size,
      selectable: false,
      evented: false,
    };
    this.hover_block = new fabric.Rect(hover_square);
    this.canvas.add(this.hover_block);

    canvas.on('mouse:move', (options) => {
      this.onHover(options);
      canvas.renderAll();
    });
    canvas.on('mouse:out', () => {
      this.hover_block.set('opacity', 0);
      canvas.renderAll();
      this.mouse_down = false;
      this.drag_mode = 'none';
    });
    canvas.on('mouse:down', (options) => {
      this.mouse_down = true;
      this.onClick(options);
      canvas.renderAll();
    });
    canvas.on('mouse:up', () => {
      this.mouse_down = false;
      this.drag_mode = 'none';
    });
    this.draw();
    canvas.renderAll();
  }

  clearSearch() {
    for (let i = 0; i < this.blocks.length; i++) {
      for (let j = 0; j < this.blocks[i].length; j++) {
        if (this.blocks[i] && this.blocks[i][j] && this.blocks[i][j].fill) {
          if (this.blocks[i][j].fill == '#BDE0FE' || this.blocks[i][j].fill == '#6A88A5') { 
            this.removeBlock(i, j);
          }
        }
      }
    }
    this.clearPath();
    this.open_nodes = [];
    this.closed_nodes = [];
    this.inAnimation = false;
    this.canvas.renderAll();
  }

  startSearch() { 
    if (this.start && this.goal) {
      this.startDate = new Date();
      this.clearSearch();
      let algorithm = this.algorithm;
      if (algorithm == 'a-star-manhattan' || algorithm == 'a-star-diagonal' || algorithm == 'a-star-euclidean' || algorithm == 'dijkstra') {
        let open = [];
        let closed = [];
        this.start.g = 0;
        this.start.parent = null;
        open.push(this.start);
        if (algorithm == 'a-star-manhattan') {
          this.a_star(open, closed, 'manhattan');
        } else if (algorithm == 'a-star-diagonal') {
          this.a_star(open, closed, 'diagonal');
        } else if (algorithm == 'a-star-euclidean') {
          this.a_star(open, closed, 'euclidean');
        } else if (algorithm == 'dijkstra') {
          this.a_star(open, closed, 'dijkstra');
        }
      }
    }
  }

  a_star(open, closed, heuristic) {
    let done = false;
    if (open.length > 0) {
      let lowest_index = 0;
      for (let i = 0; i < open.length; i++) {
        if (open[i].f < open[lowest_index].f) {
          lowest_index = i;
        }
      }
      let current = open[lowest_index];
      if (!this.areSame(current, this.start) && !this.areSame(current, this.goal)) {
        current.set('fill', '#BDE0FE');
        current.set('opacity', 1);
        current.isTouched = true;
      }
      if (this.areSame(open[lowest_index], this.goal)) {
        done = true;
        this.inAnimation = false;
      }
      if (!done) {
        this.removeFromArray(open, current);
        closed.push(current);
        let neighbors;
        neighbors = this.findNeighbors(current);
        for (let i = 0; i < neighbors.length; i++) {
          let neighbor = neighbors[i];
          if (!neighbor.isTouched && !this.areSame(neighbor, this.start) && !this.areSame(neighbor, this.goal) && neighbor.type != 'obstacle') {
            neighbor.set('fill', '#6A88A5');
            neighbor.set('opacity', 1);
          }
          let newPath = false;
          if (!this.checkIfInArray(neighbor, closed) && neighbor.type != 'obstacle') {
            let corner = false;
            if ((current.i > neighbor.i && current.j < neighbor.j) && (this.blocks[current.i-1][current.j].type == 'obstacle' || this.blocks[current.i][current.j+1].type == 'obstacle')) {
              corner = true; // moving top right
            } else if ((current.i < neighbor.i && current.j < neighbor.j) && (this.blocks[current.i+1][current.j].type == 'obstacle' || this.blocks[current.i][current.j+1].type == 'obstacle')) {
              corner = true; // moving bottom right
            } else if ((current.i > neighbor.i && current.j > neighbor.j) && (this.blocks[current.i-1][current.j].type == 'obstacle' || this.blocks[current.i][current.j-1].type == 'obstacle')) {
              corner = true; // moving top left
            } else if ((current.i < neighbor.i && current.j > neighbor.j) && (this.blocks[current.i+1][current.j].type == 'obstacle' || this.blocks[current.i][current.j-1].type == 'obstacle')) {
              corner = true; // moving bottom left
            }
            if (!corner) {
              let tempG = current.g + this.getDistance(current, neighbor);
              if (this.checkIfInArray(neighbor, open)) {
                if (tempG < neighbor.g) {
                  neighbor.g = tempG;
                  newPath = true;
                }
              } else {
                neighbor.g = tempG;
                newPath = true;
                open.push(neighbor);
              }
              if (newPath) {
                neighbor.h = this.heuristic(neighbor, this.goal, heuristic);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = current;
              }
            }
          }
        }
        setTimeout(() => {
          this.inAnimation = true;
          this.a_star(open, closed, heuristic);
          this.endDate = new Date();
          this.elapsedTime = (this.endDate.getTime() - this.startDate.getTime()) / 1000;
        }, this.speed * 10);
      }
      this.clearPath();
      let path = [];
      let temp = current;
      path.push(temp);
      while (temp.parent) {
        path.push(temp.parent);
        temp = temp.parent;
      }
      path.push(this.start);

      let line = {
        stroke: '#FCF9BE',
        strokeWidth: 2,
        originX: 'center',
        originY: 'center',
        selectable: false,
        hoverCursor: 'normal',
        evented: false,
      };
      for (let i = 0; i < path.length-1; i++) {
        this.path.push(this.createLine([path[i].j * this.grid_size + this.grid_size/2, path[i].i * this.grid_size + this.grid_size/2], 
                        [path[i+1].j * this.grid_size + this.grid_size/2, path[i+1].i * this.grid_size + this.grid_size/2], line));
      }
      this.canvas.renderAll();
      this.open_nodes = [];
      this.closed_nodes= [];
    } else {
      console.log('No solution');
      this.inAnimation = false;
    }
  }

  heuristic(node_1, node_2, mode) {
    if (mode == 'euclidean') {
      return this.getDistance(node_1, node_2);
    } else if (mode == 'manhattan') {
      return Math.abs(node_1.i - node_2.i) + Math.abs(node_1.j - node_2.j);
    } else if (mode == 'diagonal') {
      return Math.max(Math.abs(node_1.i - node_2.i) + Math.abs(node_1.j - node_2.j));
    } else if (mode == 'dijkstra') {
      return 1;
    }
  }

  clearPath() {
    for (let i = 0; i < this.path.length; i++) {
      this.canvas.remove(this.path[i]);
    }
    this.path = [];
  }

  speedChange(event) {
    this.speed = event.target.value;
  }

  removeFromArray(array, element) {
    for(let i = array.length-1; i >= 0; i--) {
      if (this.areSame(array[i], element)) {
        array.splice(i, 1);
      }
    }
  }

  areSame(node_1, node_2) {
    if (node_1.i == node_2.i && node_1.j == node_2.j) {
      return true;
    }
    return false;
  }

  checkIfInArray(node, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].i == node.i && list[i].j == node.j) {
        return true;
      }
    }
    return false;
  }

  // Returns an array of the 8 nodes around a node (if possible)
  findNeighbors(node) {
    let neighbors = [];
    if (node.i > 0) {
      neighbors.push(this.blocks[node.i-1][node.j]);
    }
    if (node.j > 0) {
      neighbors.push(this.blocks[node.i][node.j-1]);
    }
    if (node.i < this.blocks.length-1) {
      neighbors.push(this.blocks[node.i+1][node.j]);
    }
    if (node.j < this.blocks[0].length-1) {
      neighbors.push(this.blocks[node.i][node.j+1]);
    }
    if (node.i-1 >= 0 && node.j-1 >= 0) {
      neighbors.push(this.blocks[node.i-1][node.j-1]);
    }
    if (node.i+1 <= this.blocks.length-1 && node.j+1 <= this.blocks[0].length-1) {
      neighbors.push(this.blocks[node.i+1][node.j+1]);
    }
    if (node.i-1 >= 0 && node.j+1 <= this.blocks[0].length-1) {
      neighbors.push(this.blocks[node.i-1][node.j+1]);
    }
    if (node.i+1 <= this.blocks.length-1 && node.j-1 >= 0) {
      neighbors.push(this.blocks[node.i+1][node.j-1]);
    }
    return neighbors;
  }

  getDistance(node_1, node_2) {
    return Math.sqrt((node_2.j - node_1.j) ** 2 + (node_2.i - node_1.i) ** 2);
  }

  // Called when the tile mode radio button changes
  tileChange(tile) { 
    this.mode = tile;
  }

  // Called when the algorithm radio button changes
  algorithmChange(algorithm) { 
    this.algorithm = algorithm;
  }

  // Either instantiates the 2D grid array, or clears out every block in the existing one
  clearGrid() {
    if (!this.inAnimation) {
      for (let i = 0; i < (this.canvas_size[1] / this.grid_size); i++) {
        if (!this.blocks[i]) {
          this.blocks[i] = [];
        }
        for (let j = 0; j < (this.canvas_size[0] / this.grid_size); j++) {
          if (!this.blocks[i][j]) {
            this.blocks[i][j] = {};
          }
          this.removeBlock(i, j);
        }
      }
      for (let i = 0; i < this.path.length; i++) {
        this.canvas.remove(this.path[i]);
      }
      this.path = [];
      this.canvas.renderAll();
      this.mouse_down = false;
      this.current_color = null;
      this.start = null;
      this.goal = null;
      this.open_nodes = [];
      this.closed_nodes = [];
    }
  }

  // Runs when one of the preset buttons is clicked.
  applyPreset(preset) {
    if (preset == 1) {
      let tempMode = this.mode;
      this.clearGrid();
      this.mode = 'start';
      this.onClick(null, 14, 11);
      this.mode = 'goal';
      this.onClick(null, 14, 28);
      this.mode = 'obstacle';
      for (let i = 10; i < 19; i++) {
        this.onClick(null, i, 19);
      }
      this.mode = tempMode;
    }
    this.canvas.renderAll();
  }

  onClick(options, top?, left?): void {
    if (!this.inAnimation) {
      let mouse_x, mouse_y, i, j;
      if (options) {
        mouse_x = options.e.layerX;
        mouse_y = options.e.layerY;
      }
      if (top && left) {
        i = top;
        j = left;
      } else {
        j = Math.floor(mouse_x / this.grid_size);
        i = Math.floor(mouse_y / this.grid_size);
      }
      if (this.blocks[i][j].opacity == 1) {
        this.drag_mode = 'remove';
        this.removeBlock(i, j);
      } else {
        this.drag_mode = 'add';
        this.addBlock(i, j);
      }
    }
  }

  onDrag(options): void {
    if (!this.inAnimation) {
      let mouse_x = options.e.layerX;
      let mouse_y = options.e.layerY;
      let j = Math.floor(mouse_x / this.grid_size);
      let i = Math.floor(mouse_y / this.grid_size);
      if (this.blocks[i][j].opacity == 1 && this.drag_mode == 'remove' && this.blocks[i][j].fill == this.current_color) {
        this.removeBlock(i, j);
      } else if (this.blocks[i][j].opacity == 0 && this.drag_mode == 'add') {
        this.addBlock(i, j);
      }
    }
  }

  removeBlock(i, j): void {
    if (!this.inAnimation) {
      this.blocks[i][j].opacity = 0; // setting invisible
      this.blocks[i][j].type = null;
      this.blocks[i][j].g = null; // Distance from starting node
      this.blocks[i][j].h = null; // Heuristic cost
      this.blocks[i][j].f = null; // Total cost
      this.blocks[i][j].isTouched = false;
    }
  }

  addBlock(i, j): void {
    if (!this.inAnimation) {
      this.blocks[i][j].opacity = 1; // setting visible
      this.blocks[i][j].type = this.mode;
      this.blocks[i][j].parent = null;
      if (this.mode == 'start') {
        this.blocks[i][j].set('fill', '#23BC38'); 
        this.mouse_down = false;
        if (!this.start) {
          this.start = this.blocks[i][j];
        } else if (this.start !== this.blocks[i][j]) {
          this.start.opacity = 0;
          this.start.type = null;
          this.start = this.blocks[i][j];
        }
      } else if (this.mode == 'goal') {
        this.blocks[i][j].set('fill', '#FC6F7A');
        this.goal = this.blocks[i][j];
        this.mouse_down = false;
      } else if (this.mode == 'obstacle') {
        this.blocks[i][j].set('fill', '#7F6466');
      }
      this.current_color = this.blocks[i][j].fill;
    }
  }

  onHover(options): void {
    if (!this.inAnimation) {
      let mouse_x = options.e.layerX;
      let mouse_y = options.e.layerY;
      let i = Math.floor(mouse_y / this.grid_size);
      let j = Math.floor(mouse_x / this.grid_size);
      if (this.blocks[i] && this.blocks[i][j]) {
        if (this.blocks[i][j].opacity == 1) {
          this.hover_block.set('opacity', 0);
        } else {
          this.hover_block.set('opacity', 1);
          if (this.mode == 'start') {
            this.hover_block.set('fill', '#08AF08');
          } else if (this.mode == 'goal') {
            this.hover_block.set('fill', '#BC1A22');
          } else if (this.mode == 'obstacle') {
            this.hover_block.set('fill', '#383838');
          }
          this.hover_block.left = j * this.grid_size;
          this.hover_block.top = i * this.grid_size;
        }
        if (this.mouse_down) {
            this.onDrag(options);
        }
      }
    }
  }

  draw(): void {
    let grid_line = {
      stroke: '#A8A8A8',
      strokeWidth: 1,
      originX: 'center',
      originY: 'center',
      selectable: false,
      hoverCursor: 'normal',
      evented: false,
    };
    let square_options= {
      opacity: 0,
      width: this.grid_size,
      height: this.grid_size,
      selectable: false,
      evented: false,
    };
    for (let i = 0; i < this.blocks.length; i++) {
      for (let j = 0; j < this.blocks[i].length; j++) {
        let square = new fabric.Rect(square_options);
        square.left = j * this.grid_size;
        square.top = i * this.grid_size;
        square.i = i;
        square.j = j;
        square.g = null;
        square.h = null;
        square.f = null;
        square.parent = null;
        this.blocks[i][j] = square;
        this.canvas.add(square);
      }
    }

    for (let i = 1; i < (this.canvas_size[0] / this.grid_size); i++) {
      this.createLine([i*this.grid_size, 0], [i*this.grid_size, this.canvas_size[1]], grid_line);
    }
    for (let i = 1; i < (this.canvas_size[1] / this.grid_size); i++) {
      this.createLine([0, i*this.grid_size], [this.canvas_size[0], i*this.grid_size], grid_line);
    }
  }

  // Helper Functions
  createLine(p1, p2, options): void {
    let x1 = p1[0];
    let y1 = p1[1];
    let x2 = p2[0];
    let y2 = p2[1];
    let line = new fabric.Line([x1, y1, x2, y2], options);
    this.canvas.add(line);
    return line;
  }
}