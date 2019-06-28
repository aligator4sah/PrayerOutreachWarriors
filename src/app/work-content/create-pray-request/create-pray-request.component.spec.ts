import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrayRequestComponent } from './create-pray-request.component';

describe('CreatePrayRequestComponent', () => {
  let component: CreatePrayRequestComponent;
  let fixture: ComponentFixture<CreatePrayRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrayRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrayRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
