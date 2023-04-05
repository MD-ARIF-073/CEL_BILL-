import { Component, OnInit } from '@angular/core';
import { Payment} from '../model/payment';
import { DatabaseAPIservicesServiceService } from '../services/database-apiservices-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  paymentList:Payment[]=[];

  constructor(private paymentSerbice:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getPayment();
  }

  //get all data from PAYMENT table
  getPayment()
  {
    this.paymentSerbice.getAllPayment().subscribe(data =>{
      this.paymentList=data;
    });
  }
}
