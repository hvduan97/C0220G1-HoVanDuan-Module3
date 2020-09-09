import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUtilComponent } from './date-util.component';

describe('DateUtilComponent', () => {
  let component: DateUtilComponent;
  let fixture: ComponentFixture<DateUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
