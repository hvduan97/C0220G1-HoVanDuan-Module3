import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSerComponent } from './create-ser.component';

describe('CreateSerComponent', () => {
  let component: CreateSerComponent;
  let fixture: ComponentFixture<CreateSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
