import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEnquiryFormComponent } from './general-enquiry-form.component';

describe('GeneralEnquiryFormComponent', () => {
  let component: GeneralEnquiryFormComponent;
  let fixture: ComponentFixture<GeneralEnquiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralEnquiryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralEnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
