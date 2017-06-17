import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // UI PROPERTIES
  hideFrontPage: boolean = false;

  // CLASS PROPERTIES

  constructor() { }

  // ANGULAR EVENTS

  // UI EVENTS
  uiOnForkClicked() {
    console.log("fork clicked");
    this.hideFrontPage = true;
  }

  uiOnDotClicked() {
    console.log("dot clicked");
    this.hideFrontPage = true;
  }

  uiOnEnterClicked() {
    console.log("enter clicked");
    this.hideFrontPage = true;
  }

  // PUBLIC CLASS FUNCTIONS

  // PRIVATE CLASS FUNCTIONS
}
