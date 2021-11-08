import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingFrameComponent } from './loading-frame.component';

describe('LoadingFrameComponent', () => {
  let component: LoadingFrameComponent;
  let fixture: ComponentFixture<LoadingFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
