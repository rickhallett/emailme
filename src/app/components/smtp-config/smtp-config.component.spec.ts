import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpConfigComponent } from './smtp-config.component';

describe('SmtpConfigComponent', () => {
  let component: SmtpConfigComponent;
  let fixture: ComponentFixture<SmtpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmtpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmtpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
