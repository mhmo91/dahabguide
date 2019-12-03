import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PlaceImagesComponent } from './place-images.component'
import { AppSharedModule } from '../app-shared.module'

describe('PlaceImagesComponent', () => {
  let component: PlaceImagesComponent
  let fixture: ComponentFixture<PlaceImagesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule],
      declarations: []
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceImagesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
