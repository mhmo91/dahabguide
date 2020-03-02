import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { BookingEffects } from './booking.effects'
import { provideMockStore } from '@ngrx/store/testing'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'

describe('BookingEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: BookingEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule],
      providers: [
        BookingEffects,
        provideMockActions(() => actions$)
      ],
    })

    effects = TestBed.inject(BookingEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
