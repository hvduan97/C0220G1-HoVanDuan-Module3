import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCusComponent } from './detail-cus.component';

describe('DetailCusComponent', () => {
  let component: DetailCusComponent;
  let fixture: ComponentFixture<DetailCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
