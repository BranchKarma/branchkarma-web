import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleCardsComponent } from './circle-cards.component';

describe('CircleCardsComponent', () => {
  let component: CircleCardsComponent;
  let fixture: ComponentFixture<CircleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
