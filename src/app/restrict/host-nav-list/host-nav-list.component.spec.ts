import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HostNavListComponent } from './host-nav-list.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'

describe('HostNavListComponent', () => {
  let component: HostNavListComponent
  let fixture: ComponentFixture<HostNavListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HostNavListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HostNavListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
