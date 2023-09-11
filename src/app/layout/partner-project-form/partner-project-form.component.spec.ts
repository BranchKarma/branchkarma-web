import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerProjectFormComponent } from './partner-project-form.component';

describe('PartnerProjectFormComponent', () => {
  let component: PartnerProjectFormComponent;
  let fixture: ComponentFixture<PartnerProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerProjectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
