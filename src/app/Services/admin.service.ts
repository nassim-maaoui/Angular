import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token:any=localStorage.getItem('token')
 
  constructor(private http:HttpClient) { }
  
  AddHotel(body:any){
    return this.http.post('http://127.0.0.1:3000/api/hotels/addHotel',body)
  }
  gettAllHotel(){
    return this.http.get('http://127.0.0.1:3000/api/hotels')
  }
  updateHotels(id:string,newh:any){
    return this.http.put('http://127.0.0.1:3000/api/hotels/update/'+id,newh)
  }
  getHotelById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/hotels/'+id)
  }
  deleteHotel(id:any){
    return this.http.delete('http://localhost:3000/api/hotels/'+id)
  }
  AddVoiture(body:any){
    return this.http.post('http://127.0.0.1:3000/api/voiture/addHotel',body)
  }
  gettAllVoitures(){
    return this.http.get('http://127.0.0.1:3000/api/voitures')
  }
  updateVoiture(id:string,newh:any){
    return this.http.put('http://127.0.0.1:3000/api/voiture/update/'+id,newh)
  }
  getVoitureById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voiture/'+id)
  }
  deleteVoiture(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voiture/'+id)
  }
  uploadImage(){
    return this.http.get('http://127.0.0.1:3000/api/upload')
  }
  getAllValues() {
    // traitement pour récupérer la clé
    let h = new HttpParams().set(
      'access_key',
      'cc0c69355ca060873ff4989dad8629f0'
    );
    return this.http.get('http://apilayer.net/api/live', { params: h });
  }
  AddVoyage(body:any){
    return this.http.post('http://127.0.0.1:3000/api/voyages/addVoyage',body)
  }
  gettAllVoyage(){
    return this.http.get('http://127.0.0.1:3000/api/voyages')
  }
  updateVoyages(id:any,dataHotel:any){
    return this.http.put('http://127.0.0.1:3000/api/voyages/update/' +id,dataHotel)
  }
  getVoyageById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voyages/' +id)
  }
  deleteVoyage(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/voyages/' +id)
  }
  AddReservation(body:any){
    return this.http.post('http://127.0.0.1:3000/api/reservations/addReservation',body)
  }
  gettAllReservation(){
    return this.http.get('http://127.0.0.1:3000/api/reservations')
  }
  updateReservation(id:any,dataHotel:any){
    return this.http.put('http://127.0.0.1:3000/api/reservations/update/' +id,dataHotel)
  }
  getReservationById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/reservations/' +id)
  }
  deleteReservation(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/voyages/' +id)
  }
  AddContact(body:any){
    return this.http.post('http://127.0.0.1:3000/api/contacts/addContact',body)
  }
  gettAllContact(){
    return this.http.get('http://127.0.0.1:3000/api/contacts')
  }

}