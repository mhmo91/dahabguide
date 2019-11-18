import { appStateMock } from 'src/testing/states/app-state-mock'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RestrictToolbarComponent } from './restrict-toolbar.component'
import { provideMockStore } from '@ngrx/store/testing'
import { RestrictSharedModule } from '../restrict-shared/restrict-shared.module'


describe('RestrictToolbarComponent', () => {
  let component: RestrictToolbarComponent
  let fixture: ComponentFixture<RestrictToolbarComponent>
  // tslint:disable-next-line: prefer-const
  let initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictToolbarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RestrictSharedModule],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
