import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/services/loader/loader.service';

@Component({
  selector: 'app-sort-algorithm-visualizer',
  templateUrl: './sort-algorithm-visualizer.component.html',
  styleUrls: ['./sort-algorithm-visualizer.component.scss']
})
export class SortAlgorithmVisualizerComponent implements OnInit {

  public visible: boolean = true;
  public mode: string = '';
  private numberOfValues: number = 20;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private minHeight: number = 250;
  public enabled: boolean = true;
  private canvasHeight: number;
  private list: any[] = [];
  private delay = ms => new Promise(res => setTimeout(res, ms));
  private delaySpeed: number;
  private speedVariable: number = 100;

  constructor(private zone: NgZone, private router: Router, private loader: LoaderService) {
  }

  ngOnInit(): void {
    this.canvas = <HTMLCanvasElement> document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.mode = 'selection';
    this.checkSize();
    window.onresize = () => {
      this.checkSize();
    }
    this.generateNewGraph();
  }

  checkSize(): void {
    if (window.innerWidth > 900 && !this.visible) {
      this.visible = true;
    }
  }

  toggleVisibility(): void {
    this.visible = !this.visible;
  }

  changeMode(newMode: string, event: Event): void {
    if (!this.enabled) return;
    let elements = document.getElementById('collapse-container').children;
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.remove('selected');
    }
    let target = <HTMLElement> (event.target || event.srcElement);
    target.classList.add('selected');
    this.mode = newMode;
    this.generateNewGraph();
  }

  adjustSpeed(): void {
    this.delaySpeed = Math.ceil(5000/this.speedVariable);
  }

  goBack(): void {
    this.loader.showLoader();
    setTimeout(() => {
      this.router.navigate(['portfolio']);
      this.loader.hideLoader();
    }, 1200);
  }

  generateNewGraph(): void {
    if (!this.enabled) return;
    let newValue = Math.max(this.numberOfValues * 5, this.minHeight);
    this.canvasHeight = newValue;
    this.canvas.style.height = this.canvasHeight + 'px';
    this.canvas.height = this.canvasHeight;
    this.canvas.width = this.canvas.offsetWidth;
    this.list = [];
    for (let i = 0; i < this.numberOfValues; i++) {
      this.list.push(
        {
          height: Math.floor(Math.random() * Math.floor(this.canvasHeight - 10)) + 10,
          status: 'unsorted'
        }
      );
    }
    this.adjustSpeed();
    this.draw();
  }

  sliderChanged(event: Event) {
    let target = <HTMLInputElement> (event.target || event.srcElement);
    this.numberOfValues = Number(target.value);
    this.generateNewGraph();
  }

  speedChanged(event: Event) {
    let target = <HTMLInputElement> (event.target || event.srcElement);
    this.speedVariable = Number(target.value);
    this.adjustSpeed();
  }

  draw(): void {
    let width = this.canvas.offsetWidth;
    this.canvas.width = width;
    let ctx = this.ctx;
    ctx.clearRect(0, 0, width, this.canvasHeight);
    let widthInterval = width / this.numberOfValues;
    for (let i = 0; i < this.numberOfValues; i++) {
      if (this.list[i].status === 'unsorted') {
        ctx.fillStyle = '#9EA6FF';
        ctx.strokeStyle = '#BABFFF';
      } else if (this.list[i].status === 'sorting') {
        ctx.fillStyle = '#47C947';
        ctx.strokeStyle = '#50E050';
      } else if (this.list[i].status === 'searching') {
        ctx.fillStyle = '#FF4753';
        ctx.strokeStyle = '#FF7F87';
      } else if (this.list[i].status === 'sorted') {
        ctx.fillStyle = '#FFB270';
        ctx.strokeStyle = '#FFC89E';
      }
      ctx.fillRect(i * widthInterval, 0, widthInterval, this.list[i].height);
      ctx.strokeRect(i * widthInterval, 0, widthInterval, this.list[i].height );
    }
  }

  sort(): void {
    if (!this.enabled) return;
    this.enabled = false;
    if (this.mode === 'selection') {
      this.selectionSort(0);
    } else if (this.mode === 'bubble') {
      this.bubbleSort(this.list.length);
    } else if (this.mode === 'insertion') {
      this.insertionSort();
    }
  }

  insertionSort = async() => {
    let length = this.list.length;
    for (let i = 0; i < length; i++) {
      let j = i-1;
      this.list[i].status = 'searching';
      while (j >= 0) {
        this.list[j].status = 'searching';
        this.list[j+1].status = 'searching';
        this.draw();
        await this.delay(this.delaySpeed);
        if (this.list[j].height > this.list[j+1].height) {
          this.list[j+1].status = 'sorting';
          this.list[j].status = 'sorting';
          this.draw();
          await this.delay(this.delaySpeed);
          let temp = this.list[j+1];
          this.list[j+1] = this.list[j];
          this.list[j] = temp;
          this.draw();
          await this.delay(this.delaySpeed);
          this.list[j].status = 'sorted';
          this.list[j+1].status = 'sorted';
          j--;
          this.draw();
          await this.delay(this.delaySpeed);
        } else {
          this.list[j].status = 'sorted';
          this.list[j+1].status = 'sorted';
          this.draw();
          await this.delay(this.delaySpeed);
          break;
        }
      }
      this.draw();
      await this.delay(this.delaySpeed);
    }
    this.enabled = true;
  }

  bubbleSort = async(length: number) => {
    if (length === 1){
      this.enabled = true;
    }
    for (let i = 0; i < length-1; i++) {
      this.list[i].status = 'searching';
      this.list[i+1].status = 'searching';
      this.draw();
      await this.delay(this.delaySpeed);
      if (this.list[i].height > this.list[i+1].height) {
        this.list[i].status = 'sorting';
        this.list[i+1].status = 'sorting';
        this.draw();
        await this.delay(this.delaySpeed);
        let temp = this.list[i];
        this.list[i] = this.list[i+1];
        this.list[i+1] = temp;
        this.draw();
        await this.delay(this.delaySpeed);
      }
      this.list[i].status = 'unsorted';
    }
    this.list[length-1].status = 'sorted';
    this.draw();
    await this.delay(this.delaySpeed);
    this.bubbleSort(length-1);
  }

  selectionSort = async(i: number) => {
    let length = this.list.length;
    let min = i;
    for (let j = i; j < length; j++) {
      this.list[j].status = 'searching';
      this.list[min].status = 'sorting';
      this.draw();
      await this.delay(this.delaySpeed);
      if (this.list[j].height < this.list[min].height) {
        this.list[min].status = 'unsorted';
        this.list[j].status = 'sorting';
        this.draw();
        min = j;
      } else {
        this.list[j].status = 'unsorted';
      }
      await this.delay(this.delaySpeed);
    }
    if (this.list[length-1].status !== 'sorting') {
      this.list[length-1].status = 'unsorted';
    }
    this.list[i].status = 'sorting';
    this.draw();
    await this.delay(this.delaySpeed);
    let temp = this.list[i];
    this.list[i] = this.list[min];
    this.list[min] = temp;
    this.draw();
    await this.delay(this.delaySpeed);
    this.list[min].status = 'unsorted';
    this.list[i].status = 'sorted';
    this.draw();
    await this.delay(this.delaySpeed);
    if (i+1 < length) {
      this.selectionSort(i+1);
    } else {
      this.enabled = true;
    }
  }

}
