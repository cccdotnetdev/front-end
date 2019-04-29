import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatefactsComponent } from './corporatefacts.component';

describe('CorporatefactsComponent', () => {
  let component: CorporatefactsComponent;
  let fixture: ComponentFixture<CorporatefactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatefactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatefactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
