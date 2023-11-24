import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
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
}
