import { TestBed } from '@angular/core/testing'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

import { ResourcesEffects } from './resources.effects'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'

describe('ResourcesEffects', () => {
  // tslint:disable-next-line: prefer-const
  let actions$: Observable<any>
  let effects: ResourcesEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule],
      providers: [
        ResourcesEffects,
        provideMockActions(() => actions$)
      ]
    })

    effects = TestBed.inject<ResourcesEffects>(ResourcesEffects)
  })

  it('should be created', () => {
    expect(effects).toBeTruthy()
  })
})
