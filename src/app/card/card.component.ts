import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../projects/Project";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input("project")
  public project: Project;

  constructor() {
  }

  ngOnInit() {
  }

}
