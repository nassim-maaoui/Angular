import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AjoutHotelComponent } from './Hotels/ajout-hotel/ajout-hotel.component';
import { ListHotelComponent } from './Hotels/list-hotel/list-hotel.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './Hotels/hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailsComponent } from './Hotels/details/details.component';
import { MenuComponent } from './dashbords/menu/menu.component';
import { ContactComponent } from './contact/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VoituresComponent } from './Voitures/voitures/voitures.component';
import { AboutComponent } from './About/about/about.component';
import { GallerieComponent } from './Galeries/gallerie/gallerie.component';
import { VisaComponent } from './Visas/visa/visa.component';
import { VoyageComponent } from './Voyages/voyage/voyage.component';
import { ReservationComponent } from './Reservations/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AjoutHotelComponent,
    ListHotelComponent,
    HomeComponent,
    HotelsComponent,
    DetailsComponent,
    MenuComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    VoituresComponent,
    AboutComponent,
    GallerieComponent,
    VisaComponent,
    VoyageComponent,
    ReservationComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
