import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { NiceImageComponent } from './nice-image.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('NiceImageComponent', () => {
  let component: NiceImageComponent
  let fixture: ComponentFixture<NiceImageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NiceImageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceImageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
