import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingModel, PassengerModel } from '../models/bookingModel';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  searchForm !: FormGroup;
  submitted = false;
  bookerName !: string
  email !: string
  seats !: number
  passName !: string
  passAge !: string
  meal !: string
  gender !: string
  from !: string
  to !: string
  departureDate !: Date
  arrivalDate !: Date
  bookingSched !: BookingModel;
  passengers !: PassengerModel
  pnr !: string
  cost !: number


  constructor(private formBuilder: FormBuilder , private route: Router , private bookingService : BookingService) {
    const navigation = this.route.getCurrentNavigation();
    if(navigation !=null){
      const state = navigation.extras.state as {
        departureDate: Date,
        arrivalDate: Date,
        from: string,
        to: string,
        cost: number
      };
      this.from = state.from
      this.to = state.to
      this.departureDate = state.departureDate
      this.arrivalDate = state.arrivalDate
      this.cost = state.cost

      console.log("NavigationBar" + this.from)
    }
    
   
    this.searchForm = this.formBuilder.group({
      bookerName: '',
      email: '',
      seats: 0,
      passName: '',
      passAge: '',
      meal: '',
      gender: ''


    });
  }

  ngOnInit(): void {
  }

  handleSearch(formValues: any) {
    console.log(formValues)
    this.bookingSched = new BookingModel('','','',new Date(), new Date() ,'','','',0, 0,[] );
    this.passengers = new PassengerModel('','','','')
    this.bookingSched.from = this.from;
    this.bookingSched.to = this.to;
    this.bookingSched.departureDate = this.departureDate;
    this.bookingSched.returnDate = this.arrivalDate
    this.bookingSched.price = this.cost
    this.bookingSched.bookerName  = formValues['bookerName']
    this.bookingSched.bookerEmailId =formValues['email']
    //this.bookingSched.bookerContactNumber =formValues['seats']
    this.bookingSched.totalSeats =formValues['seats']
    this.passengers.age = formValues['passAge']
    this.passengers.gender = formValues['gender']
    this.passengers.meal = formValues['meal']
    this.passengers.name = formValues['passName']
    console.log(" Booking List " + this.passengers)
    this.bookingSched.passengers.push(this.passengers)
    this.submitted = true;
    console.log(" Booking List " + this.bookingSched)
    this.bookingService.bookFlight(this.bookingSched).subscribe(
      data => {
        console.log("bookFlight" + data.pnr)
        this.pnr  = data.pnr;
        this.route.navigate(['users/user/bookingsuccessful',this.pnr])
      }
    )
    //this.pnrGenerated();
  }
  pnrGenerated() {
    if (this.submitted) {
      this.route.navigate(['users/user/bookingsuccessful'])
    }
  }


}
