import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminService}from 'src/app/Services/admin.service'

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  ListHotels:any=[]
 
  dataHotel={
    Nom:'',
    NbreEtoile:'',
    Description:'',
    image:File,
    Prix:0,
    id:'',
  }
  imageFile: any;
  multipleFiles=[];
 onFileSelected(event: any){
    console.log(event.target?.files[0])
    this.imageFile = event.target.files[0];
  }
  selectMultipleImage(event: any) {
    if (event.target.files.length > 0) {
    this.multipleFiles = event.target.files;
    }
    }
  
  /*onFileSelected(e :any){
    if(e.target.files) {
    var reader = new FileReader();
    reader.readAsDataURL (e.target.files[0]);
    reader.onload=(event:any )=>{
    this.imageFile=event.target.files[0];
    
    }
  }
}*/
  messageSuccess=''
  constructor(private ds:AdminService,private route:Router) {
   
    this.ds.gettAllHotel().subscribe(data=>{
      console.log(data)
      this.ListHotels=data
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
    this.ds.AddHotel(data).subscribe(response=>{
       console.log(response)

       this.route.navigateByUrl("/list")

    })
  }
  myForm=new FormGroup({
    reference:new FormControl(),
    Nom:new FormControl(),

    NbreEtoile:new FormControl(),

    Description:new FormControl(),

    Prix:new FormControl(),

    image:new FormControl(File),

  })
  sendData(){
   let hotel = {
      reference:this.myForm.value.reference,
      Nom:this.myForm.value.Nom,
      NbreEtoile: this.myForm.value.NbreEtoile,
      Description: this.myForm.value.Description,
      Prix: this.myForm.value.Prix,
      image:this.imageFile
 
    }

    let formData=new  FormData();
    formData.append("reference" ,this.myForm.value.reference)
   formData.append("Nom" ,this.myForm.value.Nom)
   formData.append("NbreEtoile" ,this.myForm.value.NbreEtoile)
    formData.append("Description" ,this.myForm.value.Description)
    formData.append("Prix" ,this.myForm.value.Prix)
    formData.append("image" ,this.imageFile)
   
console.log(hotel);
 this.ds.AddHotel(formData).subscribe((data:any)=>{
  console.log(data);
 
 },(error:any)=>{
  console.log(error);
 }) 
}
  /*delete(id:any,i:number){

    this.ds.deleteHotel(id).subscribe(response=>{
      console.log(response)
       this.ListHotels.splice(i,1)

    })

  }*/
  deleteh(id: any){

     this.ds.deleteHotel(id).subscribe({
      next: (res)=>{
        
        console.log(res)
      },
      error: (err)=>{
        console.log(err)
  
      }     
  })
  }
delete(id:any){
  this.ds.deleteHotel(id).subscribe(
    res=>{
      console.log(res);
    },
    err=>{
      console.log(err)
    }
  )
}
 
  



  getdata(Nom:string,NbreEtoile:string,Description:string,Prix:number,image:string,id:any){
    this.messageSuccess=''
    this.dataHotel.Nom=Nom
    this.dataHotel.NbreEtoile=NbreEtoile
    this.dataHotel.Description=Description
    this.dataHotel.Prix=Prix
  
    this.dataHotel.id=id
    console.log(this.getdata)

  }
  updateHotel(f:any){
    let data=f.value
    this.ds.updateHotels(this.dataHotel.id,data).subscribe(response=>
      {
     
        let indexId=this.ListHotels.findIndex((obj:any)=>obj._id==this.dataHotel.id)

        this.ListHotels[indexId].Nom=data.Nom
        this.ListHotels[indexId].NbreEtoile=data.NbreEtoile
        this.ListHotels[indexId].Description=data.Description
        this.ListHotels[indexId].Prix=data.Prix
        this.ListHotels[indexId].image=data.image

        this.messageSuccess=`this student ${this.ListHotels[indexId].nom} is updated`
        console.log(this.ListHotels)


      })
  }


  details(id:any){

    this.ds.getHotelById(id).subscribe(data=>{
      console.log(data)
      this.ListHotels=data
    })
  }



  messageErr=""


  ngOnInit(): void {
  }


}

