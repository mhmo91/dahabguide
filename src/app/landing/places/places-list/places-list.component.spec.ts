import { provideMockStore } from '@ngrx/store/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlacesListComponent } from './places-list.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppSharedModule } from 'src/app/app-shared/app-shared.module'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { MapsAPILoader } from '@agm/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

describe('PlacesListComponent', () => {
  let component: PlacesListComponent
  let fixture: ComponentFixture<PlacesListComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [PlacesListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }),
      {
        provide: MapsAPILoader,
        useValue: {
          load: jasmine.createSpy('load').and.returnValue(new Promise(() => true))
        }
      }
      ]
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
