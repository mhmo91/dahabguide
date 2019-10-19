import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddPlaceComponent } from './add-place.component'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/app/reducers'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('AddPlaceComponent', () => {
  let component: AddPlaceComponent
  let fixture: ComponentFixture<AddPlaceComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlaceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({})]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
