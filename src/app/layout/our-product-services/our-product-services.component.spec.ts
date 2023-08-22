import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductServicesComponent } from './our-product-services.component';

describe('OurProductServicesComponent', () => {
  let component: OurProductServicesComponent;
  let fixture: ComponentFixture<OurProductServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProductServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurProductServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
