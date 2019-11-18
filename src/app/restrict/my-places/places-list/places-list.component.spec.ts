import { RestrictSharedModule } from 'src/app/restrict/restrict-shared/restrict-shared.module'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlacesListComponent } from './places-list.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { provideMockStore } from '@ngrx/store/testing'

describe('PlacesListComponent', () => {
  let component: PlacesListComponent
  let fixture: ComponentFixture<PlacesListComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RestrictSharedModule, RouterTestingModule],
      declarations: [PlacesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
