import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MatSelect } from '@angular/material/select'

@Component({
  selector: 'dahab-mat-select-extension',
  templateUrl: './mat-select-extension.component.html',
  styleUrls: ['./mat-select-extension.component.scss']
})
export class MatSelectExtensionComponent implements OnInit {
  @Output() resetToDefault: EventEmitter<any> = new EventEmitter()
  @Output() done: EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  SaveClicked() {
    this.done.emit(true)
  }
}
