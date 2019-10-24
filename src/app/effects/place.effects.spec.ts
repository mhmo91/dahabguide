import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { PlaceEffects } from './place.effects'

describe('PlaceEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: PlaceEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaceEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.get<PlaceEffects>(PlaceEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
