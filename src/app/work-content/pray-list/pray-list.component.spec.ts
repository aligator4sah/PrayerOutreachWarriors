import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayListComponent } from './pray-list.component';

describe('PrayListComponent', () => {
  let component: PrayListComponent;
  let fixture: ComponentFixture<PrayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
