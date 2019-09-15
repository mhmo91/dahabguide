import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictToolbarComponent } from './restrict-toolbar.component';

describe('RestrictToolbarComponent', () => {
  let component: RestrictToolbarComponent;
  let fixture: ComponentFixture<RestrictToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
