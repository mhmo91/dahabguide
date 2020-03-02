import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceComponent } from './place.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { provideMockStore } from '@ngrx/store/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppSharedModule } from 'src/app/app-shared/app-shared.module'
import { MapsAPILoader } from '@agm/core'

describe('PlaceComponent', () => {
  let component: PlaceComponent
  let fixture: ComponentFixture<PlaceComponent>
  const initialState = appStateMock

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppSharedModule],
      declarations: [PlaceComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState }), {
        provide: MapsAPILoader,
        useValue: {
          load: jasmine.createSpy('load').and.returnValue(new Promise(() => true))
        }
      }]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
