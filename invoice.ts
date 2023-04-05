export interface Invoice{
    invoiceID:number;
    invoiceNo:string;
    invoiceDate:string;
    clientNo:string;
    projectNo:string;
    billNo:string;
    netAmount:Float32Array;
    vat:number;
    vatAmount:Float32Array;
    inTotalAmount:Float32Array;
    description:string;
}