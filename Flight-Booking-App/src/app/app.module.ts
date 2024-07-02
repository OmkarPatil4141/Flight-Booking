import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/admin/login/login.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';
import { AirportComponent } from './Pages/admin/airport/airport.component';
import { AllFlightsComponent } from './Pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './Pages/admin/bookings/bookings.component';
import { CityComponent } from './Pages/admin/city/city.component';
import { NewFlightComponent } from './Pages/admin/new-flight/new-flight.component';
import { SearchComponent } from './Pages/website/search/search.component';
import { BookFlightComponent } from './Pages/website/book-flight/book-flight.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBookingsComponent } from './Pages/website/my-bookings/my-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    AirportComponent,
    AllFlightsComponent,
    BookingsComponent,
    CityComponent,
    NewFlightComponent,
    SearchComponent,
    BookFlightComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
