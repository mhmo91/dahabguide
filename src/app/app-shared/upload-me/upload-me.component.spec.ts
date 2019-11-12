import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UploadMeComponent } from './upload-me.component'
import { FirebaseTestingModule } from 'src/testing/firebase-testing/firebase-testing.module'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('UploadMeComponent', () => {
  let component: UploadMeComponent
  let fixture: ComponentFixture<UploadMeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FirebaseTestingModule],
      declarations: [UploadMeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMeComponent)
    component = fixture.componentInstance
    component.file = new File([''], 'test')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
