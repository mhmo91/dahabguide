import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddNewBookingComponent } from './add-new-booking.component'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'
import { RouterTestingModule } from '@angular/router/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { provideMockStore } from '@ngrx/store/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppSharedModule } from '../app-shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet'

describe('AddNewBookingComponent', () => {
  let component: AddNewBookingComponent
  let fixture: ComponentFixture<AddNewBookingComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = { ...appStateMock }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule, RouterTestingModule, AppSharedModule, BrowserAnimationsModule],
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
        { provide: MatBottomSheetRef, useValue: {} }
      ]

    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
