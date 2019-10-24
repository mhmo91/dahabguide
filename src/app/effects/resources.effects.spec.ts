import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { ResourcesEffects } from './resources.effects'

describe('ResourcesEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: ResourcesEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourcesEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.get<ResourcesEffects>(ResourcesEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
