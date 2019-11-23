import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceComponent } from './place.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { provideMockStore } from '@ngrx/store/testing'
import { RouterTestingModule } from '@angular/router/testing'

describe('PlaceComponent', () => {
  let component: PlaceComponent
  let fixture: ComponentFixture<PlaceComponent>
  const initialState = appStateMock

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlaceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
