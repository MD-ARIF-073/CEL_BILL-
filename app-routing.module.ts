import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillComponent } from './bill/add-bill/add-bill.component';
import { BillComponent } from './bill/bill.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ClientComponent } from './client/client/client.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { PaymentComponent } from './payment/payment.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ProjectComponent } from './project/project/project.component';

const routes: Routes = [
  {path:'client',component:ClientComponent,children:[
    {path:'addClient',component:AddClientComponent}]},
  {path:'project',component:ProjectComponent,children:[
    {path:'addProject',component:AddProjectComponent}]},
  {path:'bill',component:BillComponent,children:[{
    path:'addBill',component:AddBillComponent}]},
  {path:'invoice',component:InvoiceComponent,children:[
    {path:'addInvoice',component:AddInvoiceComponent}]},
  {path:'payment',component:PaymentComponent,children:[
    {path:'addPayment',component:AddPaymentComponent}]},
  {path:'home',component:HomeComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
