import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './Hotels/hotels/hotels.component';
import { ListHotelComponent } from './Hotels/list-hotel/list-hotel.component';
import { AjoutHotelComponent } from './Hotels/ajout-hotel/ajout-hotel.component';
import { DetailsComponent } from './Hotels/details/details.component';
import { ContactComponent } from './contact/contact/contact.component';


import { MenuComponent } from './dashbords/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VoituresComponent } from './Voitures/voitures/voitures.component';
import { AboutComponent } from './About/about/about.component';
import { GallerieComponent } from './Galeries/gallerie/gallerie.component';
import { VisaComponent } from './Visas/visa/visa.component';
import { VoyageComponent } from './Voyages/voyage/voyage.component';
import { ReservationComponent } from './Reservations/reservation/reservation.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"hotel",component:HotelsComponent},
  {path:"listHotel",component:ListHotelComponent},
  {path:"ajouteHotel",component:AjoutHotelComponent},
  {path:"detailsHotel",component:DetailsComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:SignupComponent},
  {path:"voiture",component:VoituresComponent},
  {path:"about",component:AboutComponent},
  {path:"gallerie",component:GallerieComponent},
  {path:"visa",component:VisaComponent},
  {path:"voyage",component:VoyageComponent},
  {path:'contact',component:ContactComponent},
  {path:'reservation',component:ReservationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
