import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSerComponent } from './detail-ser.component';

describe('DetailSerComponent', () => {
  let component: DetailSerComponent;
  let fixture: ComponentFixture<DetailSerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
