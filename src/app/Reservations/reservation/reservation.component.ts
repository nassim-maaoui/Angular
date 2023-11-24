import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AdminService}from 'src/app/Services/admin.service'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent  implements OnInit{
  ListReservations:any=[]
 
  dataReservation={
    username:'',
    telephone:'',
    nbreJour:'',
    DateDebut:'',
    DateFin:'',
    
    id:'',
  }

  messageSuccess=''
  constructor(private ds:AdminService,private route:Router) {
   
    this.ds.gettAllReservation().subscribe(data=>{
      console.log(data)
      this.ListReservations=data
    })
    
   }
/*
  image : any;
selectImage (e: any) {
this.image = e.target.files [0];
console.log(this.image);
}
ajout() {
let formData = new FormData()
formData.append('name', this.hero.name)
formData.append('power', this.hero.power.toString())
formData.append('image', this.image)
*/
   add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.AddReservation(data).subscribe(response=>{
       console.log(response)

      

    })
  }
 

  
  myForm=new FormGroup({

    username:new FormControl(),

    telephone:new FormControl(),

    nbreJour:new FormControl(),

    DateDebut:new FormControl(),

    DateFin:new FormControl(),

  })
  sendData(){
   let reservation = {
      
      username:this.myForm.value.username,
      telephone: this.myForm.value.telephone,
      nbreJour: this.myForm.value.nbreJour,
      DateDebut: this.myForm.value.DateDebut,
      DateFin:this.myForm.value.DateFin
 
    }

    let formData=new  FormData();
   
   formData.append("username" ,this.myForm.value.username)
   formData.append("telephone" ,this.myForm.value.telephone)
    formData.append("nbreJour" ,this.myForm.value.nbreJour)
    formData.append("DateDebut" ,this.myForm.value.DateDebut)
    formData.append("DateFin" ,this.myForm.value.DateFin)
   
console.log(reservation);
 this.ds.AddReservation(formData).subscribe((data:any)=>{
  console.log(data);
 
 },(error:any)=>{
  console.log(error);
 }) 
}





  messageErr=""


  ngOnInit(): void {
  }


}