import {Component, OnInit, Output} from '@angular/core';
import {Project} from "../projects/Project";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output()
  projects: Project[] = [];

  constructor() {
    this.projects.push(new Project(
        "MusicNoteSync",
        "A Diploma Thesis",
      "/projects/musicnotesync"
      ), new Project(
        "TallySheet",
      "Don't trust your co-workers!",
      null
      ), new Project(
        "Coffee-Machine-Alarm",
      "Do i smell coffee?",
      null
      ), new Project(
        "CAN-Control",
      "My car won't start!",
      null
      )
    );
  }

  ngOnInit() {
  }

}
