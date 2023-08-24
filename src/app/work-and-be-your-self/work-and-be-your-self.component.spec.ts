import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndBeYourSelfComponent } from './work-and-be-your-self.component';

describe('WorkAndBeYourSelfComponent', () => {
  let component: WorkAndBeYourSelfComponent;
  let fixture: ComponentFixture<WorkAndBeYourSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAndBeYourSelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAndBeYourSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
