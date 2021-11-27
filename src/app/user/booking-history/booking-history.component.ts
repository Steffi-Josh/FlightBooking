import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  searchForm !: FormGroup;
  submitted = false
  message !: string;
  emailID !: string
  bookingDetails !: any

  constructor(private formBuilder: FormBuilder , private bookingService : BookingService , private router : Router) { 
    this.searchForm = this.formBuilder.group({
      emailid : ''
    });
  }

  ngOnInit(): void {
  }

  onNavToOrderDetails(passDetails : any){
    this.router.navigate(['/users/user/passengerDetails'], { state: {data: passDetails} });
  }

  handleSearch(formValues: any) {
    console.log(formValues['emailid'])
    this.emailID = formValues['emailid']
    this.bookingService.getBookingDetailsFromEmailId(this.emailID).subscribe(
      response => {
        console.log(response);
        this.bookingDetails = response;
      }
    )
    this.submitted = true;
  }

}
