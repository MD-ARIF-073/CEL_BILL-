import { Component, OnInit } from '@angular/core';
import { Bill } from '../model/bill';
import { DatabaseAPIservicesServiceService } from '../services/database-apiservices-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{

  billList:Bill[]=[];

  constructor(private billService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getBill();
  }

  getBill()
  {
    this.billService.getAllBILL().subscribe(data =>{
      this.billList=data
    });
  }

  display:boolean=true;
  modalClose()
  {
    this.display!=this.display;
    this.getBill();
  }

  downloadBill(billID:any)
  {
     this.billService.GenerateBillPDF(billID).subscribe(data =>{
      let blob:Blob=data.body as Blob;
      let url=window.URL.createObjectURL(blob);
      window.open(url);
     })
  }

}
