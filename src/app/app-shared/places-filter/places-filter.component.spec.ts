import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AppSharedModule } from '../app-shared.module'
import { PlacesFilterComponent } from './places-filter.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { provideMockStore } from '@ngrx/store/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('PlacesFilterComponent', () => {
  let component: PlacesFilterComponent
  let fixture: ComponentFixture<PlacesFilterComponent>
  const initialState = appStateMock

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule, BrowserAnimationsModule],
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
