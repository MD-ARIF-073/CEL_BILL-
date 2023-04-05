import { Component, OnInit } from '@angular/core';
import { Client } from '../../model/client';
import { DatabaseAPIservicesServiceService } from '../../services/database-apiservices-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  clientList:Client[]=[];
  display:boolean=true;

  constructor(private clientService:DatabaseAPIservicesServiceService){}

  ngOnInit(): void {
    this.getClient();
  }

  //get all data from CLIENT table
  getClient()
  {
    this.clientService.getAllClient().subscribe(data =>{
      this.clientList=data;
    });
  }

  //modal CLOSE
  modalClose()
  {
    this.display!=this.display;
    this.getClient();
  }


  deleteClient(id:number)
  {
    this.clientService.deleteClient(id).subscribe(data =>{
      this.getClient();
      var deleteNotification=document.getElementById('client-delete-alart');
      if(deleteNotification)
      {
        deleteNotification.style.display="block";
      }
      setTimeout(function(){
        if(deleteNotification)
        {
          deleteNotification.style.display="none"
        }
      },4000)
    })
  }

}
