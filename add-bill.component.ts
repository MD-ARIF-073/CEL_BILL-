import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../model/bill';
import { Project } from '../../model/project';
import { Client } from '../../model/client';
import { Invoice } from '../../model/invoice';
import { DatabaseAPIservicesServiceService } from '../../services/database-apiservices-service.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit{

  @Input() bill:any;
  billID:number=0;
  billNo:string=this.getBillNo();
  clientNo:string="";
  projectNo:string="";
  billDate:string="";
  projectQuantity:number=1;
  currency:string="";
  termsOfDelivery:string="";
  deliveryDate:string="";
  deliveryTo:string="";
  invoiceTo:string="";
  termsOfPayment:string="";
  netAmount:number=0.0;
  vat:number=0;
  vatAmount:number=0;
  intotalAmount:number=0.0;
  description:string="";
  status:string="";

  pCost:number=0;
  payAmount:number=0.0;
  dueAmount:number=0.0;
  dueDate:string="";

  //random billno
  getBillNo() {
    return 'CEL-BL'+Math.round(Math.random()*99)+Math.round(Math.random()*990);
  }

  //random invoice no
  getInvoiceNO() {
    return 'CEL-IN'+Math.round(Math.random()*100)+Math.round(Math.random()*200);
  }

  //random payment no
  getPaymentNO() {
    return 'CEL-PM'+Math.round(Math.random()*50)+Math.round(Math.random()*200);
  }

  //get net amount
  getNetAmount()
  {
    this.netAmount=this.projectQuantity*this.pCost;
  }

  //declare variable
  projectList:Project[]=[];
  clientList:Client[]=[];

  constructor(private billService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getClient();
    this.getProject();
  }


  //for payment status
  selectStatus (st: any) {
    this.status = st.target.value;
  }

  //get for client name
  getClient()
  {
    this.billService.getAllClient().subscribe(data =>{
      this.clientList=data;
    });
  }

  //get for project name
  getProject()
  {
    this.billService.getAllProject().subscribe(data =>{
        this.projectList=data;
      }
    );
  }

  //get project Cost
  getprojectCost(cost:any)
  {
    this.pCost=cost;
  }

  //vat calculate
  vatCalculate()
  {
    this.vatAmount=(this.netAmount*this.vat)/100;
    this.intotalAmount=(this.netAmount)+(this.netAmount*this.vat)/100;
    this.dueAmount=this.intotalAmount-this.payAmount;
  }


  


  //add bill table,invoice table,
  addBill()
  {
    //for bill table
    var billList={
      billID:this.billID,
      billNo:this.billNo,
      clientNo:this.clientNo,
      projectNo:this.projectNo,
      billDate:this.billDate,
      projectQuantity:this.projectQuantity,
      currency:this.currency,
      termsOfDelivery:this.termsOfDelivery,
      deliveryDate:this.deliveryDate,
      deliveryTo:this.deliveryTo,
      invoiceTo:this.invoiceTo,
      termsOfPayment:this.termsOfPayment,
      netAmount:this.netAmount,
      vat:this.vat,
      vatAmount:this.vatAmount,
      intotalAmount:this.intotalAmount,
      description:this.description,
      status:this.status,
    }

    //for invoice table
    var invoiceList={
      invoiceNo:this.getInvoiceNO(),
      invoiceDate:this.deliveryDate,
      clientNo:this.clientNo,
      projectNo:this.projectNo,
      billNo:this.billNo,
      netAmount:this.netAmount,
      vat:this.vat,
      vatAmount:this.vatAmount,
      intotalAmount:this.intotalAmount,
      description:this.description,
    }

    //for payment table
    var paymentList={
      paymentNo:this.getPaymentNO(),
      billNo:this.billNo,
      clientNo:this.clientNo,
      intotalAmount:this.intotalAmount,
      payAmount:this.payAmount,
      dueAmount:this.dueAmount,
      dueDate:this.dueDate,
    }


    this.billService.addBill(billList).subscribe(data =>{
      this.billService.addInvoices(invoiceList).subscribe(data =>{
        console.log('Successfully Insert into Invoice');
      })
      this.billService.addPayment(paymentList).subscribe(data =>{
        console.log('Successfully Insert into Payment');
      })
      var closeModal=document.getElementById('add-bill-modal-close');
      if(closeModal)
      {
        closeModal.click();
        this.billID=0;
        this.billNo=this.getBillNo();
        this.clientNo="";
        this.projectNo="";
        this.billDate="";
        this.projectQuantity=1;
        this.currency="";
        this.termsOfDelivery="";
        this.deliveryDate="";
        this.deliveryTo="";
        this.invoiceTo="";
        this.termsOfPayment="";
        this.netAmount=0.0;
        this.vat=0;
        this.vatAmount=0;
        this.intotalAmount=0.0;
        this.description="";
        this.status="";
        this.payAmount=0.0;
        this.dueAmount=0.0;
        this.dueDate="";
      }
      var successfullNotification=document.getElementById('bill-success-alart');
      if(successfullNotification)
      {
        successfullNotification.style.display="block";
      }setTimeout(function(){
        if(successfullNotification)
        {
          successfullNotification.style.display="none";
        }
      },4000)
    })

  }
}
