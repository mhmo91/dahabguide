import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { PlaceEffects } from './place.effects'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'

describe('PlaceEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: PlaceEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule],
      providers: [
        PlaceEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.inject<PlaceEffects>(PlaceEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
