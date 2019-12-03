import { provideMockStore } from '@ngrx/store/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceAvailabilityCalendarComponent } from './place-availability-calendar.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppSharedModule } from '../app-shared.module'
import { appStateMock } from 'src/testing/states/app-state-mock'

describe('PlaceAvailabilityCalendarComponent', () => {
  let component: PlaceAvailabilityCalendarComponent
  let fixture: ComponentFixture<PlaceAvailabilityCalendarComponent>
  const initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule],
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }),
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAvailabilityCalendarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
