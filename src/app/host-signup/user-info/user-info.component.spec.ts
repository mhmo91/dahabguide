import { appStateMock } from 'src/testing/states/app-state-mock'
import { hostWizardStateMock } from './../reducers/index'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UserInfoComponent } from './user-info.component'
import { provideMockStore } from '@ngrx/store/testing'
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, DebugElement } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'

describe('UserInfoComponent', () => {
  let component: UserInfoComponent
  let fixture: ComponentFixture<UserInfoComponent>
  const initialState = { ...appStateMock, ...hostWizardStateMock }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [UserInfoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
