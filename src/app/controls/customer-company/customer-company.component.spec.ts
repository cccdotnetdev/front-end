import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCompanyComponent } from './customer-company.component';

describe('CustomerCompanyComponent', () => {
  let component: CustomerCompanyComponent;
  let fixture: ComponentFixture<CustomerCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
