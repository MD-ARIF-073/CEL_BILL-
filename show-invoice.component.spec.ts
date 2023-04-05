import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInvoiceComponent } from './show-invoice.component';

describe('ShowInvoiceComponent', () => {
  let component: ShowInvoiceComponent;
  let fixture: ComponentFixture<ShowInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
