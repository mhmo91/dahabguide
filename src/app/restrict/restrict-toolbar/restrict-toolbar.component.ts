import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dahab-restrict-toolbar',
  templateUrl: './restrict-toolbar.component.html',
  styleUrls: ['./restrict-toolbar.component.scss']
})
export class RestrictToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
