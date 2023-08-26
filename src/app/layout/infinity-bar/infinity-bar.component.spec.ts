import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityBarComponent } from './infinity-bar.component';

describe('InfinityBarComponent', () => {
  let component: InfinityBarComponent;
  let fixture: ComponentFixture<InfinityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinityBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfinityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
