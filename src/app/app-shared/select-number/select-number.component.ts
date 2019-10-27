import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'dahab-select-number',
  templateUrl: './select-number.component.html',
  styleUrls: ['./select-number.component.scss']
})
export class SelectNumberComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Input() controlFormName: string
  @Input() initialValue: any = 0
  @Input() label: string

  constructor() { }

  ngOnInit() {
  }


}
