import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceImagesComponent } from './place-images.component';

describe('PlaceImagesComponent', () => {
  let component: PlaceImagesComponent;
  let fixture: ComponentFixture<PlaceImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
