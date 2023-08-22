import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreValueComponent } from './core-value.component';

describe('CoreValueComponent', () => {
  let component: CoreValueComponent;
  let fixture: ComponentFixture<CoreValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
