import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceMainInfoComponent } from './place-main-info.component'

describe('PlaceMainInfoComponent', () => {
  let component: PlaceMainInfoComponent
  let fixture: ComponentFixture<PlaceMainInfoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceMainInfoComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMainInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
