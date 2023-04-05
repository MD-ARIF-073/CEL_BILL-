export interface Payment{
    paymentID:number;
    paymentNo:string;
    billNo:string;
    intotalAmount:Float32Array;
    payAmount:Float32Array;
    dueAmount:Float32Array;
    dueDate:string;
}