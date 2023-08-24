import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageInlineComponent } from './image-inline.component';

describe('ImageInlineComponent', () => {
  let component: ImageInlineComponent;
  let fixture: ComponentFixture<ImageInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
