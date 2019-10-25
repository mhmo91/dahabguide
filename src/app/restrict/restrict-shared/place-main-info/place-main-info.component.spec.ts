import { placeWizardStateMock } from '../../my-places/place-wizard-state/place-wizard.reducer'
import { provideMockStore } from '@ngrx/store/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceMainInfoComponent } from './place-main-info.component'
import { appStateMock } from 'src/app/reducers'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { PlacesPipe } from './places.pipe'
import { RestrictSharedModule } from 'src/app/restrict/restrict-shared/restrict-shared.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('PlaceMainInfoComponent', () => {
  let component: PlaceMainInfoComponent
  let fixture: ComponentFixture<PlaceMainInfoComponent>
  const initialState = { ...appStateMock, placeWizard: placeWizardStateMock }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RestrictSharedModule, NoopAnimationsModule],
      declarations: [PlaceMainInfoComponent, PlacesPipe],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceMainInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
