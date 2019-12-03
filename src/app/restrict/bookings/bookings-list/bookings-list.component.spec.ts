import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BookingsListComponent } from './bookings-list.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { RestrictSharedModule } from '../../restrict-shared/restrict-shared.module'

describe('BookingsListComponent', () => {
  let component: BookingsListComponent
  let fixture: ComponentFixture<BookingsListComponent>
  const initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestrictSharedModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [BookingsListComponent],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
