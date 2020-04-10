import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParyBbsComponent } from './pary-bbs.component';

describe('ParyBbsComponent', () => {
  let component: ParyBbsComponent;
  let fixture: ComponentFixture<ParyBbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParyBbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParyBbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
