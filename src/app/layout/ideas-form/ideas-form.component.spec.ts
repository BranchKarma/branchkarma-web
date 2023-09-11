import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasFormComponent } from './ideas-form.component';

describe('IdeasFormComponent', () => {
  let component: IdeasFormComponent;
  let fixture: ComponentFixture<IdeasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
