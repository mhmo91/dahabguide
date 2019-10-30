import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SelectNumberComponent } from './select-number.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppSharedModule } from '../app-shared.module'
import { FormGroup, FormBuilder } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('SelectNumberComponent', () => {
  let component: SelectNumberComponent
  let fixture: ComponentFixture<SelectNumberComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule, BrowserAnimationsModule],
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNumberComponent)
    component = fixture.componentInstance
    component.controlFormName = 'testControl'
    const fb = new FormBuilder()
    component.formGroup = fb.group({
      testControl: null
    })
    component.initialValue = null
    component.min = 0
    component.label = 'test label'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
