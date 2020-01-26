import { TestBed } from '@angular/core/testing'

import { BookingMinionService } from './booking-minion.service'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'

describe('BookingMinionService', () => {
  const initialState = appStateMock
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideMockStore({ initialState }),
    ]
  }))

  it('should be created', () => {
    const service: BookingMinionService = TestBed.inject(BookingMinionService)
    expect(service).toBeTruthy()
  })
})
