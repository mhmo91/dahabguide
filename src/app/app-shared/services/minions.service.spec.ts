import { TestBed } from '@angular/core/testing'

import { MinionsService } from './minions.service'

describe('MinionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: MinionsService = TestBed.get(MinionsService)
    expect(service).toBeTruthy()
  })
})
