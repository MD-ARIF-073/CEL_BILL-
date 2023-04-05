import { Component, OnInit } from '@angular/core';
import { Invoice } from '../model/invoice';
import { DatabaseAPIservicesServiceService} from '../services/database-apiservices-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{

  invoiceList:Invoice[]=[];

  constructor(private invoiceService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getInvoice();
  }

  //get all data from INVOICE table
  getInvoice()
  {
    this.invoiceService.getAllInvoice().subscribe(data =>{
      this.invoiceList=data;
    });
  }

  downloadInvoice(invoiceID:any)
  {
     this.invoiceService.GenerateInvoicePDF(invoiceID).subscribe(data =>{
      let blob:Blob=data.body as Blob;
      let url=window.URL.createObjectURL(blob);
      window.open(url);
     })
  }
}
