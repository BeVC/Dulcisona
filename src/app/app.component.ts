import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // UI PROPERTIES

  // CLASS PROPERTIES

  constructor() { }

  // ANGULAR EVENTS

  // UI EVENTS
  uiOnForkClicked() {
    console.log("fork clicked");
  }

  uiOnDotClicked() {
    console.log("dot clicked");
  }

  uiOnEnterClicked() {
    console.log("enter clicked");
  }

  // PUBLIC CLASS FUNCTIONS

  // PRIVATE CLASS FUNCTIONS
}
