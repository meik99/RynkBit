import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';
import {log} from 'util';

@Component({
  selector: 'app-smoke-break',
  templateUrl: './smoke-break.component.html',
  styleUrls: ['./smoke-break.component.css']
})
export class SmokeBreakComponent implements OnInit {
  lung: boolean[][] = [
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false]
  ];
  @ViewChild("gameCanvas")
  canavasRef: ElementRef;
  @ViewChild("imgLung")
  image: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const img: HTMLImageElement = this.image.nativeElement;
    const ctx: CanvasRenderingContext2D = this.canavasRef.nativeElement.getContext("2d");
    const canvas: HTMLCanvasElement = this.canavasRef.nativeElement;
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const blackOrWhite: boolean[][] = [[]];
    const offsetX = 0;
    const offsetY = 0;
    const blockWidth = 10;
    const blockHeight = 10;

    ctx.fillStyle = "#FF0000";
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);

    const imgArray = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
    const gameMatrix: boolean[][] = [[]];
    const gameArray: boolean[] = [];

  }

}
