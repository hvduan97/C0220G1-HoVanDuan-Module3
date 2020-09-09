import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyphieuComponent } from './quanlyphieu.component';

describe('QuanlyphieuComponent', () => {
  let component: QuanlyphieuComponent;
  let fixture: ComponentFixture<QuanlyphieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyphieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyphieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
