import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ToolbarLogoComponent } from './toolbar-logo.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('ToolbarLogoComponent', () => {
  let component: ToolbarLogoComponent
  let fixture: ComponentFixture<ToolbarLogoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarLogoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
