import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dahab-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
