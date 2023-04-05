import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { DatabaseAPIservicesServiceService } from '../../services/database-apiservices-service.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  @Input() client:any;
  clientID:number=0;
  clientNo:string=this.getClientNo();
  clientName:string="";
  clientEmail:string="";
  clientPhoneNo:string="";
  clientAddress:string="";

  constructor(private addclientService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
  }

  getClientNo() {
    return 'CEL-CL'+Math.round(Math.random()*150)+Math.round(Math.random()*290);
  }

  addClient()
  {
    var clientList={
      clientNo:this.clientNo,
      clientName:this.clientName,
      clientEmail:this.clientEmail,
      clientPhoneNo:this.clientPhoneNo,
      clientAddress:this.clientAddress
    }

    this.addclientService.addClient(clientList).subscribe(data =>{
      var closeModal=document.getElementById('add-client-modal-close');
      if(closeModal)
      {
        closeModal.click();
        this.clientNo=this.getClientNo();
        this.clientName="";
        this.clientEmail="";
        this.clientPhoneNo="";
        this.clientAddress="";
      }

      var successfullNotification=document.getElementById('client-success-alart');
      if(successfullNotification)
      {
        successfullNotification.style.display="block";
      }
      setTimeout(function(){
        if(successfullNotification)
        {
          successfullNotification.style.display="none"
        }
      },4000)
    })
  }
}
