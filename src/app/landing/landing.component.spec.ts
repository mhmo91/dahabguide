import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LandingComponent } from './landing.component'
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, DebugElement } from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'

describe('LandingComponent', () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ChangeDetectorRef, MediaMatcher]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should contain landing toolbar component ', () => {
    const nativeEl: HTMLElement = fixture.debugElement.nativeElement
    const toolbarComp = nativeEl.querySelector('dahab-landing-toolbar')
    expect(toolbarComp).toBeTruthy()
  })

  it('should have matSidenavContainer component ', () => {
    const nativeEl: HTMLElement = fixture.debugElement.nativeElement
    const comp = nativeEl.querySelector('mat-sidenav-container')
    expect(comp).toBeTruthy()
  })

  it('matSidenavContainer should contain matSidenav ', () => {
    const nativeEl: HTMLElement = fixture.debugElement.nativeElement
    const comp = nativeEl.querySelector('mat-sidenav-container').querySelector('mat-sidenav')
    expect(comp).toBeTruthy()
  })


  it('matSidenavContainer should contain matSidenavContent', () => {
    const nativeEl: HTMLElement = fixture.debugElement.nativeElement
    const comp = nativeEl.querySelector('mat-sidenav-container').querySelector('mat-sidenav-content')
    expect(comp).toBeTruthy()
  })



  it('matSidenavContent should contain a routerOutlet', () => {
    const nativeEl: HTMLElement = fixture.debugElement.nativeElement
    const comp = nativeEl.querySelector('mat-sidenav-content').querySelector('router-outlet')
    expect(comp).toBeTruthy()
  })




  // it('should contain h2 tag with the value \'stay tuned\'', () => {
  //   const debugEl: DebugElement = fixture.debugElement
  //   const nativeEl: HTMLElement = fixture.debugElement.nativeElement
  //   const h2 = nativeEl.querySelector('h2')
  //   expect(h2.textContent).toEqual('Stay tuned...')
  // })


})
