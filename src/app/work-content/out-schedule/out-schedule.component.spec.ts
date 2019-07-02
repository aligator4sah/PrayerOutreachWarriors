import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutScheduleComponent } from './out-schedule.component';

describe('OutScheduleComponent', () => {
  let component: OutScheduleComponent;
  let fixture: ComponentFixture<OutScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
