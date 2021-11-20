import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingModel } from '../models/bookingModel';
import { FlightModel } from '../models/FlightModel';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {
  searchForm !: FormGroup;
  bookingDetails !: any
  pnr !: string
  submitted = false
  message !: string;
  flights: any;
  constructor(private formBuilder: FormBuilder , private bookingService : BookingService ) { 

    this.searchForm = this.formBuilder.group({
      pnrNumber : ''
    });
  }

  ngOnInit(): void {
  }

  handleSearch(formValues: any) {
    console.log(formValues['pnrNumber'])
    //getAllPNRFromService
    this.pnr = formValues['pnrNumber']
    this.bookingService.getBookingDetailsFromPNR(this.pnr).subscribe(
      response => {
        console.log(response);
        this.bookingDetails = response;
      }
    )
    this.submitted = true;
  }

  cancelFlight(id: number) {
    this.bookingService.cancelFlight(id).subscribe(
      response => {
        console.log(response);
        this.message = `Cancellation of Flight ${id} is successfull!`
      }
    )
  }

}
