import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFrameComponent } from './game-frame.component';

describe('GameFrameComponent', () => {
  let component: GameFrameComponent;
  let fixture: ComponentFixture<GameFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
