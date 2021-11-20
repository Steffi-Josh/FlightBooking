import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { UserComponent } from './user.component';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    BookFlightComponent,
    TitlebarComponent,
    ManageBookingsComponent,
    BookingHistoryComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    // BrowserModule,
    ReactiveFormsModule,
    //  MatNativeDateModule,
    // MatDatepickerModule
    // HttpClientModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [

  ],
})
export class UserModule { }
