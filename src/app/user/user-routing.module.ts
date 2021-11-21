import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingDoneComponent } from './booking-done/booking-done.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { PassengerComponent } from './passenger/passenger.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: "user", component: UserComponent,
    children: [
      { path: '', component:TitlebarComponent},
      { path: 'bookFlight', component:BookFlightComponent },
      { path: 'manageBookings', component:ManageBookingsComponent },
      { path: 'bookingHistory', component:BookingHistoryComponent } , 
      { path: 'addPassengers/:id/:airlineName', component:PassengerComponent },  //bookingsuccessful
      { path: 'bookingsuccessful/:pnr', component:BookingDoneComponent }
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
