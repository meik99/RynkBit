import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBreakerComponent } from './block-breaker.component';

describe('BlockBreakerComponent', () => {
  let component: BlockBreakerComponent;
  let fixture: ComponentFixture<BlockBreakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBreakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
