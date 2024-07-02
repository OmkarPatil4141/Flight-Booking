import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Pages/website/search/search.component';
import { BookFlightComponent } from './Pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './Pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './Pages/admin/layout/layout.component';
import { AirportComponent } from './Pages/admin/airport/airport.component';
import { AllFlightsComponent } from './Pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './Pages/admin/bookings/bookings.component';
import { NewFlightComponent } from './Pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './Pages/admin/login/login.component';
import { CityComponent } from './Pages/admin/city/city.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"search",
    pathMatch:'full'
  },
  {
    path:'search',
    component:SearchComponent,
    title:'Search Flight'

  },
  {
    path:'book-flight',
    component:BookFlightComponent,
    title:'Book New Ticket'

  },
  {
    path:'bookings',
    component:MyBookingsComponent,
    title:'My Bookings'
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login'
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'airprt',
        component:AirportComponent
      },
      {
        path:'all-bookingd',
        component:BookingsComponent
      },
      {
        path:'new-flight',
        component:NewFlightComponent
      },
      {
        path:'city',
        component:CityComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
