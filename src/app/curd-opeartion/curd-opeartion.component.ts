import { Component,Input, OnInit } from '@angular/core';
import { Address, User } from './userModal/user.model';

@Component({
  selector: 'app-curd-opeartion',
  templateUrl: './curd-opeartion.component.html',
  styleUrls: ['./curd-opeartion.component.css']
})
export class CurdOpeartionComponent implements OnInit {

  user :User[] =[];
  

  //  @Input() titleofchild : string= '';

  fullName:string='';
  email:string='';
  phoneNumber:string='';
  line1 :string ='';
  line2 :string ='';
  pinCode :number =0;
   message:string='';
  saveButton:boolean=true;
   isDisabled :boolean =false;
   navinArr : any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

 insert():void{
  
    if(this.isDuplicateEmail()){
      alert("email already Exist bhai sorry");
    }else{






     let obj:User={    
       fullName:this.fullName,
       email:this.email,
       phoneNumber:this.phoneNumber,
       address:{
        line1 :this.line1,
        line2 :this.line2,
        pinCode:this.pinCode
       },
       message:this.message

 
 
 
      };
  this.user.push(obj);
  this.callMe();
   }

 }

 
 callMe():void{
  this.fullName='';  
  this.email ="";
  this.phoneNumber ='';
  this.line1 ='';
  this.line2 ='';
  this.pinCode =0;
    
  this.message ='';

}

//  hai bhari aahe ya vr bgh aajun kahi chukla tr 
//  deleteRecord(objArr:User):void{
 
// let newArr:User[]=[];

//   for(let i = 0; i< this.user.length ; i++){
  
//     if(objArr.email == this.user[i].email){
 
//       // ethe pahilech aalela purn object ya madhe gela 
//        newArr.push(this.user[i]);

//       console.log("bhaiSahab new array ");
//       console.log(newArr);
//       // ethe print kela je aala te 
//     }
//     // match nahi zal tr hai print honar hota but for loop mule matchhote aata 
//     // else{
//     //   console.log("print nahi hua sorry")
//     // }
    
    
//   }

//   this.navinArr=newArr;
//   console.log("ya madhe jate =");
// console.log(this.navinArr)
// }


deleteRecord(objArr:User):void{
 
  let updatedArr:User[]=[];
  
    for(let i = 0; i< this.user.length ; i++){
    
      // yacha aarth aasa hoto ki je email yenar aahe tyacha match nahi zal tr ja yacha madhe  
      // nahi zal tr te sarv array object ghe and parat ekda reassign kar ekala
      if(objArr.email != this.user[i].email){
   
        updatedArr.push(this.user[i]);  
      }   
      // aani match zal tr else madhe ja aani delete kar logic 
    }

    this.user =updatedArr;

  
  }
  


 updateRecord(objArr:User):void{


      this.fullName = objArr.fullName;  
  
      this.email = objArr.email;
      this.phoneNumber =objArr.phoneNumber;
      this.line1 =objArr.address.line1;
      this.line2 =objArr.address.line2;
      this.pinCode = objArr.address.pinCode;
        
      this.message = objArr.message;
      
      this.isDisabled =true;

      this.saveButton =false;

    }

    
    updateButton():void{
       let updateobj:User={    
      fullName:this.fullName,
      email:this.email,
      phoneNumber:this.phoneNumber,
      address:{
       line1 :this.line1,
       line2 :this.line2,
       pinCode:this.pinCode
      },
      message:this.message

      };
 // this.user.push(this.user[i]);
       for (let i = 0; i < this.user.length; i++) {

             if(this.user[i].email == this.email){

                  this.user[i] = updateobj;
                   
                  this.isDisabled = false;
                  this.saveButton = true;
                   console.log(this.user[i]);
                  this.callMe(); 
                  // break;
             }
        
           }   }

    // duplicate no gmail functionality      

    isDuplicateEmail():boolean{

      for (let i = 0; i < this.user.length; i++) {

        if(this.user[i].email == this.email){
              return true;
        }
   
      }


      return false;
    }

}
