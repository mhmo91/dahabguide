import { placeWizardStateMock } from './../place-wizard-state/place-wizard.reducer'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ChoosePlaceLocationComponent } from './choose-place-location.component'
import { RestrictSharedModule } from '../../restrict-shared/restrict-shared.module'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { MapsAPILoader } from '@agm/core'

describe('ChoosePlaceLocationComponent', () => {
  let component: ChoosePlaceLocationComponent
  let fixture: ComponentFixture<ChoosePlaceLocationComponent>
  const initialState = { ...appStateMock, placeWizard: placeWizardStateMock }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestrictSharedModule],
      declarations: [ChoosePlaceLocationComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }),
      {
        provide: MapsAPILoader,
        useValue: {
          load: jasmine.createSpy('load').and.returnValue(new Promise(() => true))
        }
      }]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePlaceLocationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
