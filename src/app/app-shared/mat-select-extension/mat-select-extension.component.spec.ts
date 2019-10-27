import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MatSelectExtensionComponent } from './mat-select-extension.component'

describe('MatSelectExtensionComponent', () => {
  let component: MatSelectExtensionComponent
  let fixture: ComponentFixture<MatSelectExtensionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSelectExtensionComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectExtensionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
