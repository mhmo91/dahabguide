import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AppSharedModule } from '../app-shared.module'
import { PlacesFilterComponent } from './places-filter.component'

describe('PlacesFilterComponent', () => {
  let component: PlacesFilterComponent
  let fixture: ComponentFixture<PlacesFilterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule],
      declarations: []
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
