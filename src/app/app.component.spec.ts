import { TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { provideMockStore } from '@ngrx/store/testing'
import { appStateMock } from 'src/testing/states/app-state-mock'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { AppSharedModule } from './app-shared/app-shared.module'

describe('AppComponent', () => {
  const initialState = appStateMock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppSharedModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })


  it('should render when router is navigating mat progress bar', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.componentInstance.navigating = true
    const app = fixture.debugElement.componentInstance
    fixture.detectChanges()
    const nativeEl: HTMLElement = fixture.debugElement.nativeElement
    expect(nativeEl.querySelector('mat-progress-bar')).toBeTruthy()
  })
})
