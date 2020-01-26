import { TestBed } from '@angular/core/testing'

import { SnackbarService } from './snackbar.service'
import { AppSharedModule } from '../app-shared.module'

describe('SnackbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppSharedModule],
    providers: []
  }))

  it('should be created', () => {
    const service: SnackbarService = TestBed.inject(SnackbarService)
    expect(service).toBeTruthy()
  })
})
