import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploysComponent } from './deploys.component';

describe('DeploysComponent', () => {
  let component: DeploysComponent;
  let fixture: ComponentFixture<DeploysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
