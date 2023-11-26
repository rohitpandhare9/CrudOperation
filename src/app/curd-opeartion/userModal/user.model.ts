

export interface User{

     fullName:string;
    email:string;
    phoneNumber:string;
    address:Address;
    message:string;


}

export interface Address{

    line1:string;
    line2:string;
    pinCode:number;

}