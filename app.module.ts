import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client/client.component'
import { AddClientComponent } from './client/add-client/add-client.component';
import { ShowClientComponent } from './client/show-client/show-client.component';
import { ProjectComponent } from './project/project/project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { PaymentComponent } from './payment/payment.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { ShowPaymentComponent } from './payment/show-payment/show-payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { ShowInvoiceComponent } from './invoice/show-invoice/show-invoice.component';
import { BillComponent } from './bill/bill.component';
import { AddBillComponent } from './bill/add-bill/add-bill.component';
import { ShowBillComponent } from './bill/show-bill/show-bill.component';

import { DatabaseAPIservicesServiceService } from './services/database-apiservices-service.service';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowClientComponent,
    ShowProjectComponent,
    AddPaymentComponent,
    ShowPaymentComponent,
    AddInvoiceComponent,
    ShowInvoiceComponent,
    ShowBillComponent,
    ErrorComponent,
    ClientComponent,
    AddClientComponent,
    ProjectComponent,
    AddProjectComponent,
    PaymentComponent,
    InvoiceComponent,
    BillComponent,
    AddBillComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseAPIservicesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
