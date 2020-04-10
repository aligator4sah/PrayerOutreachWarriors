import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedsRequestsComponent } from './needs-requests.component';

describe('NeedsRequestsComponent', () => {
  let component: NeedsRequestsComponent;
  let fixture: ComponentFixture<NeedsRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedsRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
