import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingparamComponent } from './routingparam.component';

describe('RoutingparamComponent', () => {
  let component: RoutingparamComponent;
  let fixture: ComponentFixture<RoutingparamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingparamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
