import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicNoteSyncComponent } from './music-note-sync.component';

describe('MusicNoteSyncComponent', () => {
  let component: MusicNoteSyncComponent;
  let fixture: ComponentFixture<MusicNoteSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicNoteSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicNoteSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
