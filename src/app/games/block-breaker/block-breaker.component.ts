import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-block-breaker',
  templateUrl: './block-breaker.component.html',
  styleUrls: ['./block-breaker.component.css']
})
export class BlockBreakerComponent implements OnInit {
  @ViewChild("#game")
  canvasRef: ElementRef;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.context = this.canvas.getContext("2d");
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.addEventListener("onclick", this.onclick, true);
  }

  onclick(ev: MouseEvent) {
    console.log("Clicked");
  }

}
