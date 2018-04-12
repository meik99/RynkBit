import { Component } from '@angular/core';
import {Link} from './main/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigationLinks: Link[] = [
    new Link("Home", "/"),
    // new Link("SmokeBreak", "/game/SmokeBreak")
  ];
  title = "RynkBit";
}
