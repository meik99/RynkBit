import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeBreakComponent } from './smoke-break.component';

describe('SmokeBreakComponent', () => {
  let component: SmokeBreakComponent;
  let fixture: ComponentFixture<SmokeBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
