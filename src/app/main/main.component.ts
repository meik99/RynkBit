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
        ["MusicNoteSync was my Diplomathesis. This app is designed to help musicians \n" +
        "          organize their notes. It also allows them to share the same view of a notesheet \n" +
        "          across different devices, making it the perfect tool to create a hands free \n" +
        "          notesheet-viewing experience."],
      ""
      ), new Project(
        "TallySheet",
      "Don't trust your co-workers!",
      ["Do you have snacks and drinks in your works kitchen that people should pay for?\n" +
      "          Do you hate it when Joe forgets to pay his sixth chocolate bar again?\n" +
      "          Then this app is the right one for you!"],
      ""
      ), new Project(
        "Coffee-Machine-Alarm",
      "Do i smell coffee?",
      ["Like many programmers and IT-specialists out there I sometimes dream of coffee. To fulfill this dream I strapped a RaspberryPi to an old Nespresso machine and \n" +
      "          created an alarm clock that wakes me up with a hot and steaming cup o' coffee."],
      ""
      ), new Project(
        "CAN-Control",
      "My car won't start!",
      ["Ever car nowadays has a CAN-Bus installed. So naturally i installed a CAN-Controller to read\n" +
      "          the data sent on it. What it revealed you ask? The velocity and the rpm for instance, which i\n" +
      "          already know because of my tachometer, but i still made a custom (digital) tachometer myself with\n" +
      "          JavaFX and my own tools to scan and interpret the messages."],
      ""
      )
    );
  }

  ngOnInit() {
  }

}
