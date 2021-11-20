import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: "user", component: UserComponent,
    children: [
      { path: 'bookFlight', component:BookFlightComponent },
      { path: 'manageBookings', component:ManageBookingsComponent },
      { path: 'bookingHistory', component:BookingHistoryComponent }
    ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
