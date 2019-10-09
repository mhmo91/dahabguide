import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'dahab-restrict-toolbar',
  templateUrl: './restrict-toolbar.component.html',
  styleUrls: ['./restrict-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RestrictToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
