import { hostWizardStateMock } from './reducers/index'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HostSignupComponent } from './host-signup.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { RouterTestingModule } from '@angular/router/testing'

describe('HostSignupComponent', () => {
  let component: HostSignupComponent
  let fixture: ComponentFixture<HostSignupComponent>
  const initialState = { ...appStateMock, ...hostWizardStateMock }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HostSignupComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSignupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
