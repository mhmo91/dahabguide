import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { HostWizardEffects } from './host-wizard.effects'

describe('HostWizardEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: HostWizardEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HostWizardEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.inject<HostWizardEffects>(HostWizardEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
