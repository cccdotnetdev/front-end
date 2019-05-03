import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipModalComponent } from './partnership-modal.component';

describe('PartnershipModalComponent', () => {
  let component: PartnershipModalComponent;
  let fixture: ComponentFixture<PartnershipModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
