import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPaymentComponent } from './show-payment.component';

describe('ShowPaymentComponent', () => {
  let component: ShowPaymentComponent;
  let fixture: ComponentFixture<ShowPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
