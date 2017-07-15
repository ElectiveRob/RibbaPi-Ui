import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFrameComponent } from './upload-frame.component';

describe('UploadFrameComponent', () => {
  let component: UploadFrameComponent;
  let fixture: ComponentFixture<UploadFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
