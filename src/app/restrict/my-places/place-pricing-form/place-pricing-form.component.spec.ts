import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlacePricingFormComponent } from './place-pricing-form.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RestrictSharedModule } from '../../restrict-shared/restrict-shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { placeWizardStateMock } from '../place-wizard-state/place-wizard.reducer'

describe('PlacePricingFormComponent', () => {
  let component: PlacePricingFormComponent
  let fixture: ComponentFixture<PlacePricingFormComponent>
  const initialState = { ...appStateMock, placeWizard: placeWizardStateMock }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RestrictSharedModule, BrowserAnimationsModule],
      declarations: [PlacePricingFormComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacePricingFormComponent)
    component = fixture.componentInstance
    component.place = initialState.places.entities['2kukU9egdhRNc8VcRfZm'] as Partial<any>
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
