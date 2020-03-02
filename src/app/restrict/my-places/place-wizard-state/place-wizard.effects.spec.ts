import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { PlaceWizardEffects } from './place-wizard.effects'

describe('PlaceWizardEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: PlaceWizardEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaceWizardEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.inject<PlaceWizardEffects>(PlaceWizardEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
