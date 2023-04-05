import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseAPIservicesServiceService {

  readonly dataApiUrl="https://localhost:7235/api";

  constructor(private httpClient:HttpClient) { }


  //FOR CLIENT TABLE
  //show all data from CLIENT table
  getAllClient():Observable<any[]>
  {
    return this.httpClient.get<any>(this.dataApiUrl+'/Clients');
  }
  //add new client into CLIENT table
  addClient(data:any):Observable<any>
  {
    return this.httpClient.post<any>(this.dataApiUrl+'/Clients',data);
  }
  //update client Data from CLIENT table
  updateCLient(id:number,data:any)
  {
    return this.httpClient.put(this.dataApiUrl+`/Clients/${id}`,data);
  }
  //delete client Data from CLIENT table
  deleteClient(id:number)
  {
    return this.httpClient.delete(this.dataApiUrl+`/Clients/${id}`);
  }





  //FOR PROJECT TABLE
  //show all data from PROJECT table
  getAllProject():Observable<any[]>
  {
    return this.httpClient.get<any>(this.dataApiUrl+'/Projects');
  }
  //add new project into PROJECT table
  addProject(data:any):Observable<any>
  {
    return this.httpClient.post<any>(this.dataApiUrl+'/Projects',data);
  }
  //update project Data from PROJECT table
  updateProject(id:number,data:any)
  {
    return this.httpClient.put(this.dataApiUrl+`/Projects/${id}`,data);
  }
  //delete project Data from PROJECT table
  deleteProject(id:number)
  {
    return this.httpClient.delete(this.dataApiUrl+`/Projects/${id}`);
  }





  //FOR BILL TABLE
  //show all data from BILL table
  getAllBILL():Observable<any[]>
  {
    return this.httpClient.get<any>(this.dataApiUrl+'/Bills');
  }
  //add new bill into BILL table
  addBill(data:any):Observable<any>
  {
    return this.httpClient.post<any>(this.dataApiUrl+'/Bills',data);
  }
  //update bill Data from BILL table
  updateBill(id:number,data:any)
  {
    return this.httpClient.put(this.dataApiUrl+`/Bills/${id}`,data);
  }
  //delete bill Data from BILL table
  deleteBill(id:number)
  {
    return this.httpClient.delete(this.dataApiUrl+`/Bills/${id}`);
  }





  //FOR PAYMENT TABLE
  //show all data from PAYMENT table
  getAllPayment():Observable<any[]>
  {
    return this.httpClient.get<any>(this.dataApiUrl+'/Payments');
  }
  //add new payment into PAYMENT table
  addPayment(data:any):Observable<any>
  {
    return this.httpClient.post<any>(this.dataApiUrl+'/Payments',data);
  }
  //update payment Data from PAYMENT table
  updatePayment(id:number,data:any)
  {
    return this.httpClient.put(this.dataApiUrl+`/Payments/${id}`,data);
  }
  //delete payment Data from PEYMENT table
  deletePayment(id:number)
  {
    return this.httpClient.delete(this.dataApiUrl+`/Payments/${id}`);
  }





  //FOR INVOICE TABLE
  //show all data from INVOICE table
  getAllInvoice():Observable<any[]>
  {
    return this.httpClient.get<any>(this.dataApiUrl+'/Invoices');
  }
  //add new client into CLIENT table
  addInvoices(data:any):Observable<any>
  {
    return this.httpClient.post<any>(this.dataApiUrl+'/Invoices',data);
  }
  //update client Data from CLIENT table
  updateInvoice(id:number,data:any)
  {
    return this.httpClient.put(this.dataApiUrl+`/Invoices/${id}`,data);
  }
  //delete client Data from CLIENT table
  deleteInvoices(id:number)
  {
    return this.httpClient.delete(this.dataApiUrl+`/Invoices/${id}`);
  }




  //for pdf
  GenerateInvoicePDF(invoiceID:any){
    return this.httpClient.get('https://localhost:7235/api/Invoices/GeneratePDF?id='+invoiceID,{observe:'response',responseType:'blob'});
  }

  GenerateBillPDF(billID:any){
    return this.httpClient.get('https://localhost:7235/api/Bills/BillGeneratePDF?id='+billID,{observe:'response',responseType:'blob'});
  }
}
